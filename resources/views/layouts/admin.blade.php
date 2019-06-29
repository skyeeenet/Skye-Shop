<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ Lang::get('dashboard.title') }}</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon.png">
    <link href="/css/admin/style.css" rel="stylesheet">


</head>

<body>

<!--*******************
    Preloader start
********************-->
<div id="preloader">
    <div class="loader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
        </svg>
    </div>
</div>
<!--*******************
    Preloader end
********************-->


<!--**********************************
    Main wrapper start
***********************************-->
<div id="main-wrapper">

    <!--**********************************
        Nav header start
    ***********************************-->
    <div class="nav-header">
        <div class="brand-logo"><a href="/admin"><b><img src="/assets/images/logo.png" alt=""> </b><span class="brand-title"><img src="/assets/images/logo-text.png" alt=""></span></a>
        </div>
        <div class="nav-control">
            <div class="hamburger"><span class="line"></span>  <span class="line"></span>  <span class="line"></span>
            </div>
        </div>
    </div>
    <!--**********************************
        Nav header end
    ***********************************-->

    <!--**********************************
        Header start
    ***********************************-->
    @include('parts.admin.header')
    <!--**********************************
        Header end
    ***********************************-->

    <!--**********************************
        Sidebar start
    ***********************************-->
    @include('parts.admin.sidebar-menu')
    <!--**********************************
        Sidebar end
    ***********************************-->

    <!--**********************************
        Content body start
    ***********************************-->
    @yield('content')


    <!--**********************************
        Content body end
    ***********************************-->


    <!--**********************************
        Footer start
    ***********************************-->
    <div class="footer">
        <div class="copyright">
            <p>Copyright &copy; Designed by <a href="https://themeforest.net/user/digitalheaps">Digitalheaps</a>, Developed by <a href="https://themeforest.net/user/quixlab">Quixlab</a> 2018</p>
        </div>
    </div>
    <!--**********************************
        Footer end
    ***********************************-->


    <!--**********************************
        Right sidebar start
    ***********************************-->
    @include('parts.admin.sidebar-right')
    <!--**********************************
        Right sidebar end
    ***********************************-->
</div>
<!--**********************************
    Main wrapper end
***********************************-->

<!--**********************************
    Scripts
***********************************-->
<script src="{{ asset('js/app.js')  }}"></script>
<script src="/assets/plugins/common/common.min.js"></script>
<script src="/js/admin/custom.min.js"></script>
<script src="/js/admin/settings.js"></script>
<script src="/js/admin/gleek.js"></script>
<script src="/js/admin/styleSwitcher.js"></script>
<!-- Chartjs chart -->
<script src="/assets/plugins/chart.js/Chart.bundle.min.js"></script>
<script src="/assets/plugins/d3v3/index.js"></script>
<script src="/assets/plugins/topojson/topojson.min.js"></script>
<script src="/assets/plugins/datamaps/datamaps.world.min.js"></script>
<script src="/js/admin/plugins-init/datamap-world-init.js"></script>
<script src="/assets/plugins/datamaps/datamaps.usa.min.js"></script>
<script src="/js/admin/dashboard/dashboard-1.js"></script>
<script src="/js/admin/plugins-init/datamap-usa-init.js"></script>

@yield('scripts')
</body>
</html>
