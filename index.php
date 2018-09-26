<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="core.css">
    <title>Number | JavaScipt Game</title>
</head>
<body>
         <div class="instruction_box">
            <p class="tha_instruction">Type out the numbers that appear</p>
        </div>

        <div class="num_dis">
            <input type="text" name="first_num" id="first_num" disabled="">
            <input type="text" name="second_num" id="second_num" disabled="">
            <input type="text" name="third_num" id="third_num" disabled="">
            <input type="text" name="fourth_num" id="fourth_num" disabled="">
        </div>
        <div class="num_input">
            <input type="text" name="user_input" id="user_input" maxlength="4" autofocus>
        </div>
        <div class="message_box">
            <div class="tha_msg" id="tha_msg"></p>
        </div>

        <div class="sounds">
            <audio src="true.wav" controls=""  id="true_sound" hidden=""></audio>
            <audio src="false.wav" controls="" id="false_sound" hidden=""></audio>
        </div>

    <script type="text/javascript" src="core.js"></script>
</body>
</html>
