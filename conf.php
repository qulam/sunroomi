<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--Style-->
    <link rel="stylesheet" href="media/css/bootstrap.min.css">
    <link rel="stylesheet" href="media/css/font-awesome.min.css">
    <link rel="stylesheet" href="media/css/fonts.css">
    <link rel="stylesheet" href="media/css/all.min.css">
    <!--    <link rel="stylesheet" href="media/css/slick.css">-->
    <link rel="stylesheet" href="media/css/owl-carousel.min.css">
    <!--    <link rel="stylesheet" href="media/css/style.css">-->
    <link rel="stylesheet" href="media/css/media.css">
    <title>Sunroomi</title>


    <style>

        .r-carousel-box {
            position: relative;
            width: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
        }

        .r-carousel-box img {
            display: block;
            color: #fff;
            font-size: 36px;
            line-height: 100px;
            position: relative;
            text-align: center;
            transform: translate(0, 0) scale(.4);
            transition: all .4s ease;
            opacity: .5;
        }

        .r-carousel-box .owl-item img {
            transform: translate(0, 0) scale(.6);
        }

        .r-carousel-box .owl-item.active img {
            opacity: .7;
            transform: translate(5%, 0) scale(.8);
        }

        .r-carousel-box .owl-item.active img {
            opacity: .7;
            transform: translate(0%, 0) scale(.8);
        }

        .r-carousel-box .owl-item.active img {
            transform: translate(0%, 0) scale(.6);
        }

        .r-carousel-box .owl-item.center li {
            z-index: 1;
            background-color: rgba(255, 255, 255, 0.1);
            transform: scale(1.2);
            opacity: 1;
            color: #e67e22;
            transition: all 0.2s linear;
        }

        .r-carousel-box .owl-item.center img {
            z-index: 1;
            opacity: 1;
            color: #e67e22;
        }

        .r-carousel-box .slick-prev,
        .r-carousel-box .slick-next {
            position: absolute;
            top: 50%;
            appearance: none;
            margin-top: -10px;
            padding: 0;
            border: 0;
            background: none;
            cursor: pointer;
            color: transparent;
            outline: none;
            z-index: 100;
        }

        .r-carousel-box .slick-prev {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 15px 15px 15px 0;
            left: 0;
        }

        .r-carousel-box .slick-next {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 15px 0 15px 15px;
            right: 0;
        }

        .r-carousel-box .item {
            padding-top: 40px;
            padding-bottom: 40px;
            padding-right: 32px;
            padding-left: 32px;
            margin: 25px;
            border-radius: 50%;
            width: auto !important;
            border: solid 2px rgba(255, 255, 255, .2);
        }

        .r-carousel-box li {
            list-style: none !important;
            display: flex !important;
            align-items: center;
            justify-content: center;
        }

        .r-carousel-box-header h1 {
            font-size: 81px;
            font-weight: bold;
            text-align: right;
            font-style: normal;
            font-stretch: normal;
            line-height: 1;
            letter-spacing: 0.81px;
            color: #ffffff;
        }

        .r-carousel-box-header h3 {
            font-family: Dosis-Medium;
            font-size: 31px;
            text-align: right;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.29;
            letter-spacing: 0.31px;
            color: #ffffff;
        }

        .r-carousel-box .r-left, .r-carousel-box .r-right {
            position: absolute;
            transform: translateY(-50%);
            top: 50%;
            width: 52px;
            height: 52px;
            border: 1px solid #fff;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .r-carousel-box .r-left {
            left: -40px
        }

        .r-carousel-box .r-right {
            right: -40px;
        }

        .r-carousel-box .r-left:hover, .r-carousel-box .r-right:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease-in-out;
        }

    </style>

</head>
<body>
<section class="mt--130" id="products">
    <div class="roof-types" style="background-image: url('./media/img/roof-types/9.png')">
        <div class="r-carousel-box-header">
            <h3>Lorem ipsum dolor sit</h3>
            <h1 class="text-uppercase row">ROOF TYPES</h1>
        </div>
        <ul class="r-carousel-box owl-carousel owl-theme roof-types"
            style="background-image: url('./media/img/roof-types/9.png')">
            <li class="item">
                <img class="img-responsive" src="./media/img/roof-types/22-2.png" alt="">
            </li>
            <li class="item">
                <img class="img-responsive" src="./media/img/roof-types/22-2.png" alt="">
            </li>
            <li class="item">
                <img class="img-responsive" src="./media/img/roof-types/22-2.png" alt="">
            </li>
            <li class="item">
                <img class="img-responsive" src="./media/img/roof-types/22-2.png" alt="">
            </li>
            <li class="item">
                <img class="img-responsive" src="./media/img/roof-types/22-2.png" alt="">
            </li>
            <li class="item">
                <img class="img-responsive" src="./media/img/roof-types/22-2.png" alt="">
            </li>
            <li class="item">
                <img class="img-responsive" src="./media/img/roof-types/22-2.png" alt="">
            </li>
            <li class="item">
                <img class="img-responsive" src="./media/img/roof-types/22-2.png" alt="">
            </li>
        </ul>
    </div>
</section>

<!--Script files-->
<script src="media/js/jquery.min.js"></script>
<script src="media/js/bootstrap.min.js"></script>
<script src="media/js/all.min.js"></script>
<script src="media/js/slick.js"></script>
<script src="media/js/owl-carousel.min.js"></script>
<script src="media/js/main.js"></script>
<!-- /Script files-->
</body>
</html>