<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Staff</title>
</head>
<body>
    <h1>Create Staff</h1>

    {{-- Display Flash Message --}}
    @if (session('response'))
        <div>
            <p>Status: {{ session('response')['status'] }}</p>
            <p>Message: {{ session('response')['message'] }}</p>
        </div>
    @endif

    <form action="{{ route('staffs.store') }}" method="POST">
        @csrf
        <div>
            <label for="nama">Name:</label>
            <input type="text" id="nama" name="nama" required>
        </div>
        <div>
            <label for="posisi">Position:</label>
            <input type="text" id="posisi" name="posisi" required>
        </div>
        <button type="submit">Create Staff</button>
    </form>
</body>
</html>
