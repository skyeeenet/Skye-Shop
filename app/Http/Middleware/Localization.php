<?php

namespace App\Http\Middleware;

use Closure;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        /* Check if there is locale in user's session */
        if(\Session::has('locale')) {

            /* Change language by session */
            \App::setLocale(\Session::get('locale'));
        }

        return $next($request);
    }
}
