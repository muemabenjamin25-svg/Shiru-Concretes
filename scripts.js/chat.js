/* =====================================
   SHIRU CONCRETES CHATBOT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const chatbotToggle =
        document.getElementById("chatbotToggle");

    const chatbot =
        document.getElementById("chatbot");

    const chatbotClose =
        document.getElementById("chatbotClose");

    const chatbotInput =
        document.getElementById("chatbotInput");

    const chatbotSend =
        document.getElementById("chatbotSend");

    const chatbotMessages =
        document.getElementById("chatbotMessages");


    /* =====================================
       OPEN CHATBOT
    ===================================== */

    chatbotToggle.addEventListener("click", function () {

        chatbot.classList.toggle("active");

        if (chatbot.classList.contains("active")) {
            chatbotInput.focus();
        }

    });


    /* =====================================
       CLOSE CHATBOT
    ===================================== */

    chatbotClose.addEventListener("click", function () {

        chatbot.classList.remove("active");

    });


    /* =====================================
       SEND MESSAGE
    ===================================== */

    chatbotSend.addEventListener("click", function () {

        sendMessage();

    });


    /* ENTER KEY */

    chatbotInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    });


    /* =====================================
       SEND USER MESSAGE
    ===================================== */

    function sendMessage() {

        const message =
            chatbotInput.value.trim();

        if (message === "") {
            return;
        }


        addUserMessage(message);

        chatbotInput.value = "";


        /* Generate response */

        setTimeout(function () {

            const response =
                getBotResponse(message);

            addBotMessage(response);

        }, 500);

    }


    /* =====================================
       USER MESSAGE
    ===================================== */

    function addUserMessage(message) {

        const messageElement =
            document.createElement("div");

        messageElement.className =
            "user-message";

        messageElement.textContent =
            message;

        chatbotMessages.appendChild(
            messageElement
        );

        scrollToBottom();

    }


    /* =====================================
       BOT MESSAGE
    ===================================== */

    function addBotMessage(message) {

        const messageElement =
            document.createElement("div");

        messageElement.className =
            "bot-message";

        messageElement.innerHTML =
            message;

        chatbotMessages.appendChild(
            messageElement
        );

        scrollToBottom();

    }


    /* =====================================
       BOT RESPONSES
    ===================================== */

    function getBotResponse(message) {

        const text =
            message.toLowerCase();


        /* PRODUCTS */

        if (
            text.includes("product") ||
            text.includes("sell") ||
            text.includes("concrete")
        ) {

            return `
                We offer quality concrete products including
                concrete blocks and paving blocks.
                <br><br>

                Visit our
                <a href="products.html">
                    Products page
                </a>
                to see what we offer.
            `;

        }


        /* QUOTATION */

        if (
            text.includes("quote") ||
            text.includes("quotation") ||
            text.includes("price") ||
            text.includes("cost")
        ) {

            return `
                We'd be happy to prepare a quotation
                for your project. 🏗️
                <br><br>

                Please provide details about the
                product, quantity and project location.
                <br><br>

                You can also contact us directly on WhatsApp.
                <a
                    class="chatbot-whatsapp"
                    href="https://wa.me/254746664269"
                    target="_blank">
                    💬 Request Quote on WhatsApp
                </a>
            `;

        }


        /* CONTACT */

        if (
            text.includes("contact") ||
            text.includes("phone") ||
            text.includes("call")
        ) {

            return `
                You can reach Shiru Concretes on:
                <br><br>

                📞
                <a href="tel:+254746664269">
                    +254 746 664 269
                </a>

                <br><br>

                📧
                <a href="mailto:info@shiruconcretes.com">
                    info@shiruconcretes.com
                </a>
            `;

        }


        /* LOCATION */

        if (
            text.includes("location") ||
            text.includes("where") ||
            text.includes("located")
        ) {

            return `
                📍 We are located in
                <strong>Nairobi, Kenya.</strong>
                <br><br>

                Contact us for directions
                and project consultations.
            `;

        }


        /* WHATSAPP */

        if (
            text.includes("whatsapp") ||
            text.includes("chat")
        ) {

            return `
                Sure! You can chat directly
                with our team on WhatsApp.
                <br><br>

                <a
                    class="chatbot-whatsapp"
                    href="https://wa.me/254746664269"
                    target="_blank">
                    💬 Chat on WhatsApp
                </a>
            `;

        }


        /* PROJECTS */

        if (
            text.includes("project") ||
            text.includes("construction")
        ) {

            return `
                We provide concrete and construction
                solutions for different projects.
                🏗️
                <br><br>

                Visit our
                <a href="projects.html">
                    Projects page
                </a>
                to see our work.
            `;

        }


        /* HELLO */

        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey")
        ) {

            return `
                Hello! 👋
                Welcome to Shiru Concretes.
                <br><br>

                How can we help you today?
            `;

        }


        /* THANK YOU */

        if (
            text.includes("thank") ||
            text.includes("thanks")
        ) {

            return `
                You're welcome! 😊
                <br><br>

                Shiru Concretes is ready
                to serve you.
            `;

        }


        /* DEFAULT RESPONSE */

        return `
            Thanks for contacting
            <strong>Shiru Concretes</strong>. 😊
            <br><br>

            I can help you with:
            <br>
            • Our products
            <br>
            • Project quotations
            <br>
            • Contact information
            <br>
            • Location
            <br>
            • Construction projects
            <br><br>

            You can also
            <a
                href="https://wa.me/254746664269"
                target="_blank">
                chat with us on WhatsApp
            </a>.
        `;

    }


    /* =====================================
       QUICK MESSAGE
    ===================================== */

    window.sendQuickMessage =
        function (message) {

            addUserMessage(message);

            setTimeout(function () {

                const response =
                    getBotResponse(message);

                addBotMessage(response);

            }, 500);

        };


    /* =====================================
       SCROLL TO BOTTOM
    ===================================== */

    function scrollToBottom() {

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }

});