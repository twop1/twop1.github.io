<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>Fun mode</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/business-casual.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-default" role="navigation">
<div class="container">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="index.html">Главная</a>
                    </li>
                    <li>
                        <a href="album.html">Альбомы</a>
                    </li>
                    <li>
                        <a href="foto1.html">Фото</a>
                    </li>
                    <li>
                        <a href="video.html">Интервью</a>
                    </li>
                </ul>
            </div>
        </div>
</nav>
    <div class="container">
        <div class="row">
            <div class="box">
                <div class="col-lg-12 text-center">
                    <div id="carousel-example-generic" class="carousel slide">
                        <ol class="carousel-indicators hidden-xs">
                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="item active">
                                <img class="img-responsive img-full" src="img-2/tur1.jpg" alt="">
                            </div>
                            <div class="item">
                                <img class="img-responsive img-full" src="img-2/tur2.jpg" alt="">
                            </div>
                            <div class="item">
                                <img class="img-responsive img-full" src="img-2/tur3.jpg" alt="">
                            </div>
                        </div>
                        <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span class="icon-prev"></span>
                        </a>
                        <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span class="icon-next"></span>
                        </a>
                    </div>
                    <h2 class="brand-before">
                        <small>Инфо лента</small>
                    </h2>
                    <h1 class="brand-name">Концерты</h1>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="box">
                <div class="col-lg-12">
                 
                    <h1 class="intro-text text-center">Иванов Павел  </h1>
                        <h3 class="intro-text text-center">Солист и основатель группы</h3>
                    <img class="img-responsive img-border img-left" src="img-2/pav.jpg" alt="">
                    <hr class="visible-xs">
                    <p>Житель Тверской области. Свою  карьеру как композитора начал ещё с 16 лет играю во дворе для друзей. На сегодняшний день он является салистом группы, на их счету уже 8 альбомов, 6 из которых являются тематическими и были написанны для игры World Of Warcraft.</p>
                    <p>Свой первый "лирический" альбом он записал в 2018 году, и назвал его "Открой глаза". </p>
                    <p>Сама идея создать группу была очень спонтанной. Свою первую известность в медиа пространстве Павел получил после публикации Видео на YouTube в 2009 году. Тогда Павел даже не подозревал, что именно после этого видео он через несколько лет уже будет ездить на концерты по стране.</p>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <p>Copyright &copy; Matveev 2021 Tver</p>
                </div>
            </div>
        </div>
    </footer>
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script>
$('.carousel').carousel({
interval: 5000})
</script>
</body>
</html>
