<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Staff List</title>
</head>
<body>
    <h1>Staff List</h1>

    {{-- Display Flash Message --}}
    @if (session('response'))
        <div>
            <p>Status: {{ session('response')['status'] }}</p>
            <p>Message: {{ session('response')['message'] }}</p>
        </div>
    @endif

    <a href="{{ route('staffs.create') }}">Create Staff</a>

    <ul>
        @foreach ($staffs as $staff)
            <li>
                <a href="{{ route('staffs.show', $staff->id) }}">{{ $staff->nama }}</a>
                <a href="{{ route('staffs.edit', $staff->id) }}">Edit</a>
                <form action="{{ route('staffs.destroy', $staff->id) }}" method="POST" style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <button type="submit">Delete</button>
                </form>
            </li>
        @endforeach
    </ul>
</body>
</html>
