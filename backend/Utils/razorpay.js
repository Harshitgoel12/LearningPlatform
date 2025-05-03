const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
    key_id: "rzp_test_jBgwu1BajyhSAs", // Use environment variables for security
    key_secret:"f0RsIWcoNd88MZOA6eRqqexw",
});

module.exports = razorpayInstance;