const http = require('http');


const Server = http.createServer((req, res) => {

    const url = req.url;

    res.writeHead(200, { "content-type": "text/html" });

    if (url == "/") {
        res.write(`
            
<!DOCTYPE html>
<html>
<head>
    <title>My Home Page</title>
</head>

<body style="margin: 0; font-family: Arial, sans-serif;">

    <!-- Navbar -->
    <div style="background-color: #222; padding: 20px; color: white;">
        <span style="font-size: 25px; font-weight: bold;">
            MyWebsite
        </span>

        <span style="float: right; margin-top: 5px;">
            <a href="/" style="color: white; text-decoration: none; margin: 10px;">Home</a>
            <a href="/about" style="color: white; text-decoration: none; margin: 10px;">About</a>
            <a href="#services" style="color: white; text-decoration: none; margin: 10px;">Services</a>
            <a href="#contact" style="color: white; text-decoration: none; margin: 10px;">Contact</a>
        </span>
    </div>

    <!-- Hero Section -->
    <div style="background-color: #007bff; color: white; text-align: center; padding: 100px 20px;">
        <h1 style="font-size: 45px;">Welcome to My Website</h1>

        <p style="font-size: 20px;">
            We provide the best services for you.
        </p>

        <a href="#about" style="display: inline-block; background-color: white; color: #007bff; padding: 12px 25px; text-decoration: none; border-radius: 5px;">
            Get Started
        </a>
    </div>

    <!-- About Section -->
    <div id="about" style="padding: 50px 20px; text-align: center;">
        <h2>About Us</h2>

        <p style="font-size: 17px; color: #555; line-height: 1.6;">
            We provide quality services to our customers.
            Our goal is to make your experience simple and valuable.
        </p>
    </div>

    <!-- Services Section -->
    <div id="services" style="background-color: #f4f4f4; padding: 50px 20px; text-align: center;">
        <h2>Our Services</h2>

        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 30px;">

            <div style="background-color: white; padding: 25px; width: 250px; border-radius: 8px;">
                <h3>Web Development</h3>
                <p>We create modern websites for your business.</p>
            </div>

            <div style="background-color: white; padding: 25px; width: 250px; border-radius: 8px;">
                <h3>Our Products</h3>
                <p>Explore our useful products and solutions.</p>
            </div>

            <div style="background-color: white; padding: 25px; width: 250px; border-radius: 8px;">
                <h3>Customer Support</h3>
                <p>We are always ready to help our customers.</p>
            </div>

        </div>
    </div>

    <!-- Contact Section -->
    <div id="contact" style="padding: 50px 20px; text-align: center;">
        <h2>Contact Us</h2>

        <form>
            <input type="text" placeholder="Enter your name"
                style="width: 80%; max-width: 400px; padding: 12px; margin: 10px; border: 1px solid #ccc; border-radius: 5px;">

            <br>

            <input type="email" placeholder="Enter your email"
                style="width: 80%; max-width: 400px; padding: 12px; margin: 10px; border: 1px solid #ccc; border-radius: 5px;">

            <br>

            <textarea placeholder="Enter your message" rows="4"
                style="width: 80%; max-width: 400px; padding: 12px; margin: 10px; border: 1px solid #ccc; border-radius: 5px;"></textarea>

            <br>

            <button type="submit"
                style="background-color: #007bff; color: white; padding: 12px 30px; border: none; border-radius: 5px; cursor: pointer;">
                Submit
            </button>
        </form>
    </div>

    <!-- Footer -->
    <div style="background-color: #222; color: white; text-align: center; padding: 20px;">
        <p style="margin: 0;">&copy; 2026 MyWebsite. All Rights Reserved.</p>
    </div>

</body>
</html>

        `);
    } else if (url == "/about") {
        res.write("About Page");
    } else {
        res.write("Page Not Found");
    }

    res.end();

});

Server.listen(3000);
