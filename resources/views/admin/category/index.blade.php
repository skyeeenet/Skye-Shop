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
    <script src="{{ asset('js/app.js')  }}"></script>


</head>

<body id="app">

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

    <admin-app></admin-app>
    <!--**********************************
        Nav header start
    ***********************************-->

    <!--**********************************
        Nav header end
    ***********************************-->

    <!--**********************************
        Header start
    ***********************************-->

<!--**********************************
        Header end
    ***********************************-->

    <!--**********************************
        Sidebar start
    ***********************************-->


<!--**********************************
        Sidebar end
    ***********************************-->

    <!--**********************************
        Content body start
    ***********************************-->



<!--**********************************
        Content body end
    ***********************************-->


    <!--**********************************
        Footer start
    ***********************************-->

    <!--**********************************
        Footer end
    ***********************************-->


    <!--**********************************
        Right sidebar start
    ***********************************-->

<!--**********************************
        Right sidebar end
    ***********************************-->

<!--**********************************
    Main wrapper end
***********************************-->

<!--**********************************
    Scripts
***********************************-->

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
