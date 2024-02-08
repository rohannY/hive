import ReplyDialog from "./reply-dialog";

export default function Reply() {
  return (
    <div className="border py-6 px-8 space-y-3">
      <div>
        <p className="text-sm text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          esse soluta, architecto repudiandae repellendus minima voluptatibus
          sint odio recusandae ad blanditiis nesciunt ab impedit molestiae
          pariatur possimus, modi ipsam amet.
        </p>
      </div>
      <div className="flex place-content-between pt-2 text-slate-500">
        <p className="text-md">
          Replying to :{" "}
          <span className="text-sm text-emerald-500">#323213</span>
        </p>
        <div className="space-x-4 flex flex-row items-center text-sm">
          <span>12hr ago</span>
          <span>#323213</span>
          <ReplyDialog />
        </div>
      </div>
    </div>
  );
}
