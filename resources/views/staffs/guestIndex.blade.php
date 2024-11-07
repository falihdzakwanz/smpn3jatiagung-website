<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Staff List</title>
</head>
<body>
    <h1>Staff List</h1>


    <ul>
        @foreach ($staffs as $staff)
            <li>
                <span class="staff-name">{{ $staff->nama }}</span> <span class="staff-position">{{ $staff->posisi }}</span>
            </li>
        @endforeach
    </ul>
</body>
</html>
