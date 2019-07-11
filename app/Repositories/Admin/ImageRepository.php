<?php

namespace App\Repositories\Admin;

use App\Image;
use App\Repositories\Admin\Interfaces\ImageRepositoryInterface;
use App\Services\FileProcessor;
use App\Services\ImageProcessor;
use Illuminate\Http\Request;

class ImageRepository implements ImageRepositoryInterface {

    protected $model;

    public function __construct(Image $image) {

        $this->model = $image;
    }

    public function all() {

        return $this->model->orderBy('id', 'desc')->paginate(10);
    }

    public function store(Request $request, ImageProcessor $imageProcessor, FileProcessor $fileProcessor) {

        $path_full_images = $fileProcessor->saveImage($request, 'image', 'images/', 360, 450);
        $path_thumbnail = $fileProcessor->saveImage($request, 'image', 'images/thumbnails/', 200, 200);

        $imageProcessor->compress('storage' . $path_full_images, 360, 450);
        $imageProcessor->compress('storage' . $path_thumbnail, 200, 200);

        $image = new Image([
            'url' => 'storage' . $path_full_images,
            'thumbnail' => 'storage' . $path_thumbnail,
        ]);

        $image->save();

        return true;
    }

    public function destroy(Request $request) {

        Image::destroy($request->items);

        return true;
    }
}