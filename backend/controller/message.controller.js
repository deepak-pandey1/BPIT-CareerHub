import Message from "../model/message.model.js";

// ✅ Get all messages with formatted timestamp
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });

    const formattedMessages = messages.map((msg) => ({
      _id: msg._id,
      sender: msg.sender,
      text: msg.text,
      createdAt: msg.createdAt.toLocaleString(), // Basic JS formatting
    }));

    res.status(200).json(formattedMessages);
  } catch (err) {
    console.error("Message fetch error:", err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

// ✅ Send a new message
export const sendMessage = async (req, res) => {
  const { sender, text } = req.body;

  if (!sender || !text) {
    return res.status(400).json({ error: "Sender and message text are required" });
  }

  try {
    const newMessage = new Message({ sender, text });
    await newMessage.save();

    // Format the timestamp before sending response
    const responseMessage = {
      _id: newMessage._id,
      sender: newMessage.sender,
      text: newMessage.text,
      createdAt: newMessage.createdAt.toLocaleString(),
    };

    res.status(201).json(responseMessage);
  } catch (err) {
    console.error("Message send error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
};
