<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Staff Details</title>
</head>
<body>
    <h1>Staff Details</h1>

    <p>Name: {{ $staff->nama }}</p>
    <p>Position: {{ $staff->posisi }}</p>

    <a href="{{ route('staffs.index') }}">Back to Staff List</a>
</body>
</html>
