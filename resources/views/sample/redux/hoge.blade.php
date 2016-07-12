@extends('layouts.main')

@section('title', 'Page Title')

@section('content')
    <h2>Ajaxサンプル</h2>
    <div id="container"></div>
    <script src="{{ elixir("js/sampleList.js") }}"></script>
@endsection
