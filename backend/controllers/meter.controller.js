import MeterData from "../models/meter.model.js";
// import fs from "fs";
// import csv from "csv-parser";
// import path from "path";

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

    const offSet = 5.5 * 60 * 60 * 1000;
    const givenDate = new Date(date);
    const dateAfter = new Date(givenDate.getTime() + offSet);
    const formattedDate = dateAfter.toISOString();
    const id = `${meterId}_${formattedDate}`;

    try {
      const existingData = await MeterData.findById({ _id: id });
      if (existingData) {
        return res.status(400).send("Data already exists");
      }

      const newMeterData = new MeterData({
        meterId,
        _id: id,
        date: formattedDate,
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
    const { meterId, date } = req.body;

    if (!meterId || !date) {
      return res
        .status(400)
        .send({ message: "All fields (meterId and date) are required." });
    }

    const offSet = 5.5 * 60 * 60 * 1000;
    const givenDate = new Date(date);

    if (isNaN(givenDate.getTime())) {
      return res.status(400).send({ message: "Invalid date format." });
    }

    const dateAfter = new Date(givenDate.getTime() + offSet);
    const formattedDate = dateAfter.toISOString();
    const id = `${meterId}_${formattedDate}`;

    try {
      const existingData = await MeterData.findById(id);

      if (!existingData) {
        return res.status(404).send({ message: "Meter data not found." });
      }

      const response = await MeterData.deleteOne({ _id: id });

      if (response.deletedCount > 0) {
        return res.status(200).send({ message: "Data deleted successfully." });
      } else {
        return res.status(500).send({ message: "Error while deleting data." });
      }
    } catch (error) {
      console.error("Error in deleting data:", error);
      return res
        .status(500)
        .send({ message: "Error in deleting data.", error: error.message });
    }
  };

  // insertFromFile = async (req, res) => {
  //   const results = [];

  //   fs.createReadStream("../public/file.csv")
  //     .pipe(csv())
  //     .on("data", (row) => {
  //       const { meterId, date, consumption } = row;
  //       const offSet = 5.5 * 60 * 60 * 1000;
  //       const givenDate = new Date(date);
  //       const dateAfter = new Date(givenDate.getTime() + offSet);
  //       const formattedDate = dateAfter.toISOString();
  //       const id = `${meterId}_${formattedDate}`;

  //       results.push({
  //         _id: id,
  //         meterId,
  //         date: formattedDate,
  //         consumption: parseInt(consumption),
  //       });
  //     })
  //     .on("end", async () => {
  //       try {
  //         if (results.length > 0) {
  //           await MeterData.insertMany(results);
  //           console.log("Data from file inserted successfully");
  //           res
  //             .status(200)
  //             .send({ message: "Data inserted successfully", data: results });
  //         } else {
  //           res.status(400).send({ message: "No data to insert" });
  //         }
  //       } catch (error) {
  //         console.error("Error inserting data from file:", error);
  //         res
  //           .status(500)
  //           .send({
  //             message: "Error while inserting data",
  //             error: error.message,
  //           });
  //       }
  //     })
  //     .on("error", (error) => {
  //       console.error("Error reading the file:", error);
  //       res
  //         .status(500)
  //         .send({ message: "Error reading the file", error: error.message });
  //     });
  // };
}

export default new MeterController();
