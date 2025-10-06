<script lang="ts">
	interface IProps {
		name: string;
		content: string;
	}
	const { name, content }: IProps = $props();
</script>

<meta {name} property={name} {content} />
