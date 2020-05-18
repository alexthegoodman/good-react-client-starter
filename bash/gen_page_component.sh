mkdir -p modules/client/components/pages/$1
sed -e "s/GenComponent/$1/g" bash/gen_page_component/GenComponent.tsx > components/pages/$1/$1.tsx
sed -e "s/GenComponent/$1/g" bash/gen_page_component/GenComponent.scss > components/pages/$1/$1.scss
sed -e "s/GenComponent/$1/g" bash/gen_page_component/GenComponent.d.ts > components/pages/$1/$1.d.ts
