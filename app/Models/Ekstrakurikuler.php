<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ekstrakurikuler extends Model
{
    use HasFactory;

    protected $table = 'ekstrakurikuler';
    protected $primaryKey = 'id';
    protected $guarded = 'id';
    protected $fillable = [
        'nama',
        'deskripsi',
        'foto_judul',
        'foto_kegiatan'
    ];
}
