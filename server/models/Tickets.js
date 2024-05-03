import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  name: String,
  issue: String,
  date: String,
  details: String,
});

const TicketModel = mongoose.model("tickets", TicketSchema);
export { TicketModel as Tickets };
// module.exports = TicketModel;
