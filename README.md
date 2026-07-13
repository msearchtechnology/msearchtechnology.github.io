<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MST Logo</title>
    <style>
        /* Logo Container */
        .mst-logo-container {
            display: inline-flex;
            align-items: center;
            font-family: 'Arial Black', 'Arial', sans-serif;
            background-color: #ffffff;
            padding: 20px;
            user-select: none;
        }

        /* 3-Color Rainbow Half Circle */
        .mst-half-circle {
            width: 80px;
            height: 160px;
            /* Orange, Yellow, aur Green ka vertical stripes background */
            background: linear-gradient(to right, 
                #ff9900 0%, #ff9900 33.33%, 
                #ffcc00 33.33%, #ffcc00 66.66%, 
                #33cc33 66.66%, #33cc33 100%
            );
            /* Left side ko perfect round karne ke liye border-radius */
            border-radius: 160px 0 0 160px;
            margin-right: 2px; /* M ke sath ekdam attach rakhne ke liye */
        }

        /* MST Text Style */
        .mst-text {
            font-size: 140px;
            font-weight: 900;
            color: #800020; /* Bold Red/Burgundy Colour */
            line-height: 1;
            letter-spacing: -5px; /* Aksharon ko paas lane ke liye */
        }
    </style>
</head>
<body>

    <!-- MST Logo Structure -->
    <div class="mst-logo-container">
        <div class="mst-half-circle"></div>
        <div class="mst-text">MST</div>
    </div>

</body>
</html>
