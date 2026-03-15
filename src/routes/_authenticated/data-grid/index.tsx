import { createFileRoute } from '@tanstack/react-router'
import DataGrid from '@/components/data-grid'

function RouteComponent() {
    return <DataGrid />
}

export const Route = createFileRoute('/_authenticated/data-grid/')({
    component: RouteComponent,
})

