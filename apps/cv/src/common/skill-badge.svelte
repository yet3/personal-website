<script lang="ts" module>
  export enum SkillBadeSize {
    Sm = "sm",
    Base = "base",
  }

  export interface ISkillBadgeCommonProps {
    size?: SkillBadeSize;
  }
</script>

<script lang="ts">
  interface IProps extends ISkillBadgeCommonProps {
    label: string;
  }

  const { label, size = SkillBadeSize.Sm }: IProps = $props();
</script>

<li
  class={{
    "w-fit items-center bg-primary text-base flex": true,
    "py-1.5":true,
    "px-1.75 text-skill": size === SkillBadeSize.Sm,
    "px-2 text-sm": size === SkillBadeSize.Base,
  }}
>
  <span>{label}</span>
</li>
