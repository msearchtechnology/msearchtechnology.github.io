import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@3.5.1/dist/transformers.min.js';

const dataInput = document.getElementById('dataInput');
const generateBtn = document.getElementById('generateBtn');
const outputDiv = document.getElementById('output');
const statusDiv = document.getElementById('status');

let generator = null;

async function loadModel() {
    try {
        // एक हल्का-फुल्का और तेज Transformer मॉडल लोड कर रहे हैं (DistilGPT-2)
        statusDiv.innerText = "मॉडल डाउनलोड और लोड हो रहा है (पहली बार थोड़ा समय लग सकता है)...";
        generator = await pipeline('text-generation', 'Xenova/distilgpt2');
        statusDiv.innerText = "मॉडल तैयार है! अब आप अपना डेटा दर्ज कर सकते हैं।";
    } catch (error) {
        statusDiv.innerText = "लोड करने में त्रुटि: " + error.message;
    }
}

// ऐप शुरू होते ही मॉडल लोड करना शुरू करें
loadModel();

generateBtn.addEventListener('click', async () => {
    if (!generator) {
        alert("कृपया मॉडल के पूरी तरह लोड होने तक प्रतीक्षा करें!");
        return;
    }

    const userInput = dataInput.value.trim();
    if (!userInput) {
        alert("कृपया कुछ टेक्स्ट या डेटा दर्ज करें।");
        return;
    }

    outputDiv.innerText = "प्रोसेसिंग हो रही है...";

    try {
        // आपके डेटा/इनपुट के आधार पर Transformer मॉडल नया टेक्स्ट जनरेट करेगा
        const result = await generator(userInput, {
            max_new_tokens: 50,
            temperature: 0.7,
        });

        outputDiv.innerText = result[0].generated_text;
    } catch (error) {
        outputDiv.innerText = "एरर: " + error.message;
    }
});
