import MeterData from "../models/meter.model.js";

class MeterController {
  get = async (req, res) => {
    try {
      const meterData = await MeterData.find().sort({ meterId: 1 });
      res.status(200).send(meterData);
    } catch (error) {
      console.log("Error in fetching data:", error);
      res
        .status(500)
        .send({ message: "Error in fetching data", error: error.message });
    }
  };

  insert = async (req, res) => {
    const { meterId, date, consumption } = req.body;
    if (!meterId || !date || !consumption) {
      return res.status(400).send("All fields are required");
    }

    const id = `${meterId}_${date}`;

    try {
      const existingData = await MeterData.findById({ _id: id });
      if (existingData) {
        return res.status(400).send("Data already exists");
      }

      const newMeterData = new MeterData({
        meterId,
        _id: id,
        date,
        consumption,
      });

      await newMeterData.save();
      res.status(201).send({
        message: "Data inserted successfully",
        data: newMeterData,
      });
    } catch (error) {
      console.log("Error while inserting new data:", error);
      res
        .status(500)
        .send({
          message: "Error while inserting new data",
          error: error.message,
        });
    }
  };

  delete = async (req, res) => {
    const { meterId, fromDate, toDate } = req.body;

    if (!meterId || !fromDate || !toDate) {
      return res
        .status(400)
        .send({ message: "All fields (meterId and date) are required." });
    }

    const fromId = `${meterId}_${fromDate}`;
    const toId = `${meterId}_${toDate}`;

    try {
      const response = await MeterData.deleteMany({
        _id: {
          $gte: fromId,
          $lte: toId
        },
      });
      console.log(response);

    } catch (error) {
      res.status(501).send("Error is deleting data: ", error);
    }
  };

  getConstraints = async (req, res) => {
    const { meterId, fromDate, toDate } = req.query;

    if (meterId && fromDate && toDate) {
      const fromId = `${meterId}_${fromDate}`;
      const toId = `${meterId}_${toDate}`;

      try {
        const results = await MeterData.find({
          _id: {
            $gte: fromId,
            $lte: toId,
          },
        });
        return res.status(200).send(results);
      } catch (error) {
        return res.status(500).send("Error in fetching result", error);
      }
    } else if (meterId) {
      try {
        const results = await MeterData.find({ meterId: meterId });

        return res.status(200).send(results);

      } catch (error) {
        return res.status(500).send("Error in fetching result", error);
      }
    }

    try {
      const results = await MeterData.find({
        date: {
          $gte: fromDate,
          $lte: toDate,
        },
      });
      return res.status(200).send(results);

    } catch (error) {

      return res.status(500).send("Error in fetching result", error);
    }
  }
}

export default new MeterController();
