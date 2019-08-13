<?php

namespace App\Http\Controllers\Api\Roles;

use App\Http\Controllers\Api\ApiController;
use App\Repositories\Admin\RoleRepository;
use App\Role;
use Illuminate\Http\Request;

class RoleController extends ApiController {

  public function __construct(Role $role, RoleRepository $roleRepository) {

    $this->repository = $roleRepository;
    $this->model = $role;
  }

  public function index() {

    return $this->sendSuccess(200, $this->repository->all($this->model));
  }

  public function store(Request $request) {

    $this->repository->store($request, $this->model);

    return $this->sendSuccess(201);
  }

  public function show(Role $option) {

    return $this->sendSuccess(200, $option);
  }

  public function update(Request $request, Role $option) {

    if ($this->repository->update($request, $option)) {

      return $this->sendSuccess(201);
    } else {

      return $this->sendFail(404);
    }
  }

  public function destroy(Role $option) {

    if ($this->repository->delete($option)) {

      return $this->sendSuccess(204);
    } else {

      return $this->sendFail(404);
    }
  }

}