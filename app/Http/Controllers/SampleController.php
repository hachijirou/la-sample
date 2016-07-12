<?php

namespace App\Http\Controllers;

class SampleController extends Controller
{
    public function showRedux()
    {
        return view('sample.redux.show');
    }

    public function hogeRedux()
    {
        return view('sample.redux.hoge');
    }

    public function listRedux()
    {
        $data = [
            [
                'id' => 1,
                'name' => 'hoge',
            ],
            [
                'id' => 2,
                'name' => 'fuga',
            ],
            [
                'id' => 3,
                'name' => 'piyo',
            ],
            [
                'id' => 4,
                'name' => 'moge',
            ],
        ];

        return response()->json($data);
    }
}
