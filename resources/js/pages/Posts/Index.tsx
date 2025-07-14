import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

export default function Posts({ posts }: any) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="container ms-auto p-4">
                <div className="flex items-center justify-between mb-9">
                    <h2 className="text-2xl">Blog Posts</h2>
                    <Link href="/create-post" className="btn">Create Post</Link>
                </div>
                <div className="overflow-x-auto my-6">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr className='text-end'>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>User</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post: any) => (
                                <tr key={post.id} className='text-end'>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.content}</td>

                                    {/* orm relationship */}
                                    <td>{post.user?.name || ''}</td>
                                    <td>{post.created_at}</td>
                                    <td>
                                        <Link href={`/edit-post/${post.id}`} className="btn btn-primary mr-3">Edit</Link>
                                        <Link href={`/delete-post/${post.id}`} method="delete" className="btn btn-black mr-2">Delete</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
