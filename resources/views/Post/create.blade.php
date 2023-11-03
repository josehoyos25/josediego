@extends('layout.app')

@section('titulo')
Creando una nueva publicación
@endsection

@section('contenido')
<div class="md:flexw-6/12 px-10 bg-white p-6 rounted-lg shadow-xl">
<form action="{{rounte('register')}}" method="POST" novalidate>
@csrf
<div class></div>
</form>
</div>
@endsection