<?php

namespace App\Http\Controllers\Api\Roles;

use App\Http\Controllers\Api\ApiController;
use App\Repositories\Admin\RoleRepository;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RoleController extends ApiController {

  protected $roleRepository;
  protected $model;

  public function __construct(Role $role ,RoleRepository $roleRepository) {

    $this->repository = $roleRepository;
    $this->model = $role;
  }

}