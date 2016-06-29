<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class SampleController extends Controller
{
    public function showRedux()
    {
        return view('sample.redux.show');
    }
}
