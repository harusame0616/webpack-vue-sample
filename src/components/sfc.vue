<template>
    <button @click="error">
        throw error
    </button>
</template>

<script>
export default {
    methods: {
        error() {
            throw new Error();
        }
    }
};
</script>
