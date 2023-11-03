import { PostMetadata } from "./postMetaData";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-cyan-200 p-4 rounded-md shadow-sm
        bg-white">
            <Link href={`posts/${props.slug}`}>
                <h2 className="font-bold text-cyan-500 hover:underline ">{props.title}</h2>
            </Link>
            <p className="text-slate-700">{props.subtitle}</p>
            <p className="text-sm text-slate-400">{props.date}</p>
        </div>
    )
}

export default PostPreview;