<?php

namespace App\Http\Controllers\Api\Image;

use App\Http\Controllers\Api\ApiController;
use App\Image;
use App\Repositories\Admin\ImageRepository;
use App\Services\FileProcessor;
use App\Services\ImageProcessor;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ImageController extends ApiController {


    private $imageRepository;

    public function __construct(ImageRepository $imageRepository) {

        $this->imageRepository = $imageRepository;
    }

    // Return All Images
    public function index() {

        return $this->sendSuccess(200, $this->imageRepository->all());
    }

    // Create, compress and store an image and the thumbnail
    public function store(Request $request, ImageProcessor $imageProcessor, FileProcessor $fileProcessor) {

        if ($this->imageRepository->store($request, $imageProcessor, $fileProcessor)) {

            return $this->sendSuccess(201);
        } else {

            return $this->sendFail(500);
        }
    }

    // Delete images by array of their indexes
    public function destroy(Request $request) {

        if ($this->imageRepository->destroy($request)) {

            return $this->sendSuccess(204);
        } else {

            return $this->sendFail(400);
        }
    }
}
