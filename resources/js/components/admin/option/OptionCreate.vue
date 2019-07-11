<template>
    <div class="row">
        <button @click="back" type="button" class="col-md-1 btn btn-ft btn-flat btn-dark">&larr;</button>
            <div class="card-body col-md-12">
                <h4 class="card-title mb-4">Basic Forms</h4>
                <div class="basic-form">
                    <form>
                        <div class="form-group">
                            <label class="text-label">Email Address*</label>
                            <input type="email" name="email" class="form-control" placeholder="skinner@support.com" required="">
                        </div>
                        <div class="form-group">
                            <label class="text-label">Password*</label>
                            <input type="password" name="password" class="form-control" placeholder="************" required="">
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input id="checkbox1" class="form-check-input styled-checkbox" type="checkbox">
                                <label for="checkbox1" class="form-check-label">Check Me Out</label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-form mr-2">Submit</button>
                        <button type="button" class="btn btn-light text-dark btn-form">Cancel</button>
                    </form>
                </div>
            </div>
    </div>

</template>

<script>


    export default {

        methods: {

            back() {

                this.$router.push('/admin/option')
            }
        }
    }
</script>