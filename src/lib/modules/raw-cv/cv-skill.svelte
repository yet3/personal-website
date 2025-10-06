<script lang="ts">
	interface IProps {
		label: string;
		class?: string;
	}

	const { label, class: className }: IProps = $props();
</script>

<li class={["py-1 px-2 rounded bg-base-240 w-fit text-[11px]", className]}>{label}</li>
