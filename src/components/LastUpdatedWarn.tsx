export default function lastUpdatedWarn({ updatedDate }: { updatedDate: Date }) {
  const now = new Date();
  const diffInYears = Math.floor((now.getTime() - updatedDate.getTime()) / (1000 * 60 * 60 * 24 * 365));

  return diffInYears > 1 ? (
    <div
      className="bg-yellow-100 dark:bg-orange-900 border rounded border-yellow-500 text-orange-700 dark:text-yellow-100 p-4 mb-1 font-bold flex flex-row items-center gap-1"
      role="alert"
    >
      <span className="icon-[mdi--warning-outline] text-xl"></span>最終更新日から{diffInYears}
      年以上経過しています。内容が古くなっている可能性があります。
    </div>
  ) : null;
}
