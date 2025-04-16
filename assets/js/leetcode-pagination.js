// 保证一次只渲染 15 条练习题。
const pageSize = 15;
let currentPage = 0;

// 动态修改页码的显示
const startPageEl = document.querySelector(".startPages");
const endPageEl = document.querySelector(".endPages");

// 获取最大页数（向上取整！防止最后一页丢失）
const maxPage = Math.ceil(leetcodePosts.length / pageSize);

// 设置总页数显示
endPageEl.textContent = maxPage;

const list = document.querySelector("fieldset.specialbox > ul") || document.createElement("ul");
if (!list.parentNode) {
    document.querySelector("fieldset.specialbox").insertBefore(list, document.querySelector(".controlButtons"));
}

function renderPage(page) {
    list.innerHTML = "";
    const start = page * pageSize;
    const end = start + pageSize;
    const pageItems = leetcodePosts.slice(start, end);

    // 更新当前页显示（页码从 1 开始）
    startPageEl.textContent = page + 1;

    pageItems.forEach(({ title, url }) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = url;
        link.textContent = title;
        li.appendChild(link);
        list.appendChild(li);
    });
}

// 页码显示从 1 开始，页码计算从 0 开始，渲染内容靠 slice(start, end) 控制；最多翻到 maxPage - 1，显示第 currentPage + 1 页。
// 👉 为什么是 currentPage < maxPage - 1？

// 例子：maxPage = 2 表示总共有 2 页（页码是 1 和 2）
// 由于 currentPage 从 0 开始计数，因此：
// - 第一页：currentPage = 0（显示页码为 page + 1 = 1）
// - 第二页：currentPage = 1（显示页码为 page + 1 = 2）

// 当 currentPage = 1 时：
//   start = 1 * 15 = 15
//   end = 15 + 15 = 30
//   所以会取数组的第 15~29 项（共 15 条，正好是第二页内容）

// ❗如果允许 currentPage == maxPage（也就是 2），
//   那么 start = 2 * 15 = 30，数组从索引 30 开始，
//   但如果数组总长度是 30，就什么都不显示了 → 页面空了！
// ✅ 所以我们要限制 currentPage 最大为 maxPage - 1，防止越界


function nextPage() {
    if (currentPage < maxPage - 1) {
        currentPage++;
        renderPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderPage(currentPage);
    }
}

renderPage(currentPage);
