@extends('layouts.main')

@section('title', 'Page Title')

@section('content')
    <p>ここが本文のコンテンツ</p>
    <div id="container"></div>
    <script src="{{ elixir("js/sample.js") }}"></script>
@endsection
