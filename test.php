<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="./media/css/slick.css">

    <style>

        /*Slick Slider Center Mode With Zoom Effect*/

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

        .r-carousel-box .slick-slide {
            margin: 25px;
        }

        .r-carousel-box .slick-slide.lt2 img {
            transform: translate(10%, 0) scale(.6);
        }

        .r-carousel-box .slick-slide.lt1 img {
            opacity: .7;
            transform: translate(5%, 0) scale(.8);
        }

        .r-carousel-box .slick-slide.gt1 img {
            opacity: .7;
            transform: translate(-5%, 0) scale(.8);
        }

        .r-carousel-box .slick-slide.gt2 img {
            transform: translate(-10%, 0) scale(.6);
        }

        .r-carousel-box .slick-slide.slick-center li {
            z-index: 1;
            background-color: rgba(255, 255, 255, 0.1);
            transform: scale(1.4);
            opacity: 1;
            color: #e67e22;
            transition: all 0.2s linear;
        }

        .r-carousel-box .slick-slide.slick-center img {
            z-index: 1;
            transform: scale(1);
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

        .r-carousel-box .item img {
        }

        .r-carousel-box ul li {
            list-style: none;
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


<!--test-->
<!--Roof Types-->
<section class="mt--130" id="products">
    <div class="roof-types" style="background-image: url('./media/img/roof-types/9.png')">
        <div class="r-carousel-box-header">
            <h3>Lorem ipsum dolor sit</h3>
            <h1 class="text-uppercase row">ROOF TYPES</h1>
        </div>
        <div class="r-carousel-box">
                <span class="r-right  no-select">
                    <img src="./media/img/icons/right.png" alt="">
                </span>
            <span class="r-left  no-select">
                    <img src="./media/img/icons/left.png" alt="">
                </span>

            <ul class="r-carousel">
                <li class="item col-xs-3">
                    <img class="img-responsive" src="./media/img/roof-types/22-2.png" alt="">
                </li>
                <li class="item col-xs-3">
                    <img class="img-responsive" src="./media/img/roof-types/22-4.png" alt="">
                </li>
                <li class="item col-xs-3">
                    <img class="img-responsive" src="./media/img/roof-types/22.png" alt="">
                </li>
                <li class="item col-xs-3">
                    <img class="img-responsive" src="./media/img/roof-types/22-3.png" alt="">
                </li>
                <li class="item col-xs-3">
                    <img class="img-responsive" src="./media/img/roof-types/22-2.png" alt="">
                </li>
                <li class="item col-xs-3">
                    <img class="img-responsive" src="./media/img/roof-types/22-4.png" alt="">
                </li>
                <li class="item col-xs-3">
                    <img class="img-responsive" src="./media/img/roof-types/22.png" alt="">
                </li>
                <li class="item col-xs-3">
                    <img class="img-responsive" src="./media/img/roof-types/22-3.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</section>
<!-- /Roof Types-->
<!-- /test-->

</body>

<script src="media/js/jquery.min.js"></script>
<script src="media/js/slick.js"></script>

<script>
    $('.r-carousel-box')
        .on('init', () => {
            $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
            $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
            $('.slick-slide[data-slick-index="1"]').addClass('gt1');
            $('.slick-slide[data-slick-index="2"]').addClass('gt2');
        })
        .slick({
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 5
        }).on('beforeChange', (event, slick, current, next) => {
        $('.slick-slide.gt2').removeClass('gt2');
        $('.slick-slide.gt1').removeClass('gt1');
        $('.slick-slide.lt1').removeClass('lt1');
        $('.slick-slide.lt2').removeClass('lt2');

        const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
        const lt1 = (current < next && current > 0) ? current : next - 1;
        const gt1 = (current < next || next === 0) ? next + 1 : current;
        const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

        $(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
        $(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
        $(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
        $(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

        // Clone processing when moving from 5 to 0
        if (current === 5 && next === 0) {
            $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
            $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
            $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
            $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
        }

        // Clone processing when moving from 0 to 5
        if (current === 0 && next === 5) {
            $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
            $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
            $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
            $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
        }

        console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
    });
</script>

</html>