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

  /*public function index() {

    return $this->sendSuccess(200, $this->roleRepository->all($this->model));
  }

  public function store(Request $request) {

    if ($this->roleRepository->store($request, $this->model)) {

      return $this->sendSuccess(Response::HTTP_CREATED);

    } else {

      return $this->sendFail();
    }
  }

  public function update(Request $request, Role $role) {

    if ($this->roleRepository->update($request, $role)) {

      return $this->sendSuccess(Response::HTTP_CREATED);

    } else {

      return $this->sendFail();
    }
  }

  public function destroy(Role $role) {

    if($this->roleRepository->delete($role)) {

      return $this->sendSuccess(Response::HTTP_NO_CONTENT);

    } else {

      return $this->sendFail();
    }
  }*/

}