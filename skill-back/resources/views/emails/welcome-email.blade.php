@component('mail::message')
# Welcome To Freegram

This is community of free loaders.

<!-- @component('mail::button', ['url' => ''])
Button Text
@endcomponent -->

Thanks,<br>
{{ config('app.name') }}
@endcomponent
