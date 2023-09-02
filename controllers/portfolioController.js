export const sendEmailController = (req, res) => {
  try {
    return res.status(200).send({
      success: true,
      message: "Yout Message send successfully",
    });
  } catch {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send email API error ",
      error,
    });
  }
};
