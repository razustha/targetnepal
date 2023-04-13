<!-- Carousel -->
<section class="slider position-relative">
    <div id="demo" class="carousel slide" data-bs-ride="carousel" data-interval="1000">

        <!-- Indicators/dots -->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="assets/img/slider-1.png" alt="" class="img-fluid">
                <?php include('additional-templates/main-content1.php') ?>
            </div>
            <div class="carousel-item">
                <img src="assets/img/slider-2.png" alt="" class="img-fluid">
                <?php include('additional-templates/main-content2.php') ?>

            </div>
            <div class="carousel-item">
                <img src="assets/img/slider-3.png" alt="" class="img-fluid">
                <?php include('additional-templates/main-content3.php') ?>

            </div>
        </div>

        <!-- Left and right controls/icons -->
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
</section>