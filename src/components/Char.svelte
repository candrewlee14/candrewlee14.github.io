<script lang="ts">
    interface Props {
        val?: string | undefined;
        className?: string | undefined;
        style?: string | undefined;
        color?: string;
    }

    let {
        val = undefined,
        className = undefined,
        style = undefined,
        color = "bg-blue-300"
    }: Props = $props();
</script>

<div
    {style}
    class={`${color} p-2 mx-1 rounded w-8 h-8 text-center font-bold text-white flex justify-center items-center ${className} bounce`}
>
    <span>{val}</span>
</div>

<style>
    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(5px);
        }
        100% {
            transform: translateY(0);
        }
    }

    .bounce {
        animation: bounce 0.5s 1;
    }
</style>
