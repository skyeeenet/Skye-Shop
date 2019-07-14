<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use LP;

class FileProcessor {


    public function saveImage(Request $request, $fileName, $path, $width, $height) {

        //get filename with extension
        $filenamewithextension = $request->file($fileName)->getClientOriginalName();

        //get filename without extension
        $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);

        //get file extension
        $extension = $request->file($fileName)->getClientOriginalExtension();

        //filename to store
        $filenametostore = LP::translit($filename.'_'.$width.'_'.$height.'.'.$extension);

        //Upload File
        Storage::disk('public')->put($path . $filenametostore,  file_get_contents($request->file($fileName)));

        //$request->file($fileName)->store($path, $filenametostore);

        $resultPath = '/'.$path.$filenametostore;

        return $resultPath;
    }

    public function deleteFile($path) {

        try {

            unlink($path);

        } catch (\Exception $exception) {

            info( 'deleteFileException --- ' . $exception . '-----END');
        }

        return true;

    }
}