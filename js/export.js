// ======================================
// Otome FavList
// export.js
// ======================================

// 导出尺寸
const EXPORT_SIZE = {

    portrait: {

        width: 1080,

        height: 1440

    },

    square: {

        width: 810,

        height: 1080

    }

};

// ======================================
// 导出入口
// ======================================

async function generateFavList() {

    const nickname =
        document
            .getElementById("nickname")
            .value
            .trim();

    if (!nickname) {

        alert("请先填写昵称。");

        return;

    }

    const exportNode =
        createExportContent();

    if (!exportNode) {

        alert("没有可导出的内容。");

        return;

    }

    document.body.appendChild(exportNode);

    try {

        await exportImage(

            exportNode,

            EXPORT_SIZE.portrait

        );

    }

    finally {

        exportNode.remove();

    }

}

// ======================================
// 建立导出页面
// ======================================

function createExportContent() {

    const wrapper =
        document.createElement("div");

    wrapper.id =
        "exportCanvas";

    wrapper.style.width =
        EXPORT_SIZE.portrait.width + "px";

    wrapper.style.background =
        "#fff7fb";

    wrapper.style.padding =
        "60px";

    wrapper.style.position =
        "fixed";

    wrapper.style.left =
        "-99999px";

    wrapper.appendChild(

        buildExportHeader()

    );

    wrapper.appendChild(

        buildExportBasicInfo()

    );

    wrapper.appendChild(

        buildExportGames()

    );

    wrapper.appendChild(

        buildExportFooter()

    );

    return wrapper;

}

// ======================================
// 导出标题
// ======================================

function buildExportHeader() {

    const header =
        document.createElement("div");

    header.style.textAlign = "center";

    header.style.marginBottom = "40px";

    header.innerHTML = `

        <h1 style="
            color:#d86b9c;
            font-size:48px;
            margin-bottom:12px;
        ">
            Otome FavList
        </h1>

        <div style="
            color:#888;
            font-size:22px;
        ">
            日乙个人喜好表
        </div>

    `;

    return header;

}

// ======================================
// 基础资料
// ======================================

function buildExportBasicInfo() {

    const card =
        document.createElement("div");

    card.className =
        "export-card";

    card.style.cssText = `
        background:white;
        border-radius:20px;
        padding:30px;
        margin-bottom:28px;
    `;

    card.innerHTML = `

        <h2 style="
            color:#d86b9c;
            margin-bottom:20px;
        ">
            基础资料
        </h2>

    `;

    const infos = [

        {
            label:"昵称",
            value:getInputValue("nickname")
        },

        {
            label:"游玩数量",
            value:getInputValue("gameCount")
        },

        {
            label:"入坑时间",
            value:getInputValue("startYear")
        },

        {
            label:"入坑作品",
            value:getInputValue("firstGame")
        }

    ];

    infos.forEach(info=>{

        // 自动忽略空内容
        if(!info.value){

            return;

        }

        const row =
            document.createElement("div");

        row.style.cssText=`
            display:flex;
            margin:10px 0;
            font-size:18px;
        `;

        row.innerHTML=`

            <div style="
                width:140px;
                color:#888;
            ">
                ${info.label}
            </div>

            <div style="
                flex:1;
                color:#555;
                font-weight:600;
            ">
                ${info.value}
            </div>

        `;

        card.appendChild(row);

    });

    return card;

}

// ======================================
// 读取输入框
// ======================================

function getInputValue(id){

    const input =
        document.getElementById(id);

    if(!input){

        return "";

    }

    return input.value.trim();

}

// ======================================
// 游戏导出
// ======================================

function buildExportGames() {

    const wrapper =
        document.createElement("div");

    const cards =
        document.querySelectorAll(".game-card");

    cards.forEach(card => {

        // 没填写内容就跳过
        if (!isGameCompleted(card)) {

            return;

        }

        wrapper.appendChild(

            createExportGame(card)

        );

    });

    return wrapper;

}

// ======================================
// 单个游戏
// ======================================

function createExportGame(card) {

    const game =
        document.createElement("div");

    game.className =
        "export-card";

    game.style.cssText = `
        background:white;
        border-radius:20px;
        padding:30px;
        margin-bottom:28px;
    `;

    // 游戏名称
    const title =
        card.querySelector(
            ".selected-game-name"
        ).textContent;

    game.innerHTML = `

        <h2 style="
            color:#d86b9c;
            margin-bottom:18px;
        ">

            ${title}

        </h2>

    `;

    // 喜爱度
    const heart =
        getHeartValue(card);

    if (heart > 0) {

        const row =
            document.createElement("div");

        row.style.marginBottom = "20px";

        row.innerHTML = `

            <strong>

                喜爱度：

            </strong>

            ${"♥".repeat(heart)}

        `;

        game.appendChild(row);

    }

    // 我推
    const favorite =
        getFavoriteCharacters(card);

    if (favorite.length > 0) {

        game.appendChild(

            createExportCharacterArea(

                "Character",

                favorite,

                card,

                "favorite"

            )

        );

    }

    // CP
    const cp =
        getCPCharacters(card);

    if (cp.length > 0) {

        game.appendChild(

            createExportCharacterArea(

                "Couple",

                cp,

                card,

                "cp"

            )

        );

    }

    return game;

}

// ======================================
// 人物区域
// ======================================

function createExportCharacterArea(

    title,

    ids,

    card,

    type

) {

    const area =
        document.createElement("div");

    area.style.marginTop = "24px";

    const heading =
        document.createElement("h3");

    heading.style.color = "#666";

    heading.textContent = title;

    area.appendChild(heading);

    const list =
        document.createElement("div");

    list.style.cssText = `
        display:flex;
        flex-wrap:wrap;
        gap:16px;
        margin-top:16px;
    `;

    ids.forEach(id => {

        const source =

            card.querySelector(

                `[data-id="${id}"]`

            );

        if (!source) {

            return;

        }

        list.appendChild(

            source.cloneNode(true)

        );

    });

    area.appendChild(list);

    return area;

}

// ======================================
// Footer
// ======================================

function buildExportFooter() {

    const footer =
        document.createElement("div");

    footer.style.cssText = `
        margin-top:40px;
        text-align:center;
        color:#777;
        font-size:18px;
        line-height:1.8;
    `;

    footer.innerHTML = `

        <div>

            如果发现角色遗漏、图片错误、
            功能异常或有任何建议，

        </div>

        <div>

            欢迎联系：
            otomefavlist@163.com

        </div>

        <div style="margin-top:18px;color:#aaa;">

            Generated by Otome FavList

        </div>

    `;

    return footer;

}

// ======================================
// html2canvas 导出
// ======================================

async function exportImage(

    element,

    size

) {

    if (typeof html2canvas === "undefined") {

        alert(
            "缺少 html2canvas，请先引入 html2canvas。"
        );

        return;

    }

    const canvas = await html2canvas(

        element,

        {

            width: size.width,

            height: element.scrollHeight,

            backgroundColor: "#fff7fb",

            scale: 2,

            useCORS: true

        }

    );

    downloadCanvas(

        canvas,

        "OtomeFavList.png"

    );

}

// ======================================
// 下载图片
// ======================================

function downloadCanvas(

    canvas,

    filename

) {

    const link =
        document.createElement("a");

    link.download = filename;

    link.href =
        canvas.toDataURL("image/png");

    link.click();

}

// ======================================
// 自动分页（预留）
//
// 后续实现：
// 1080×1440
// 超出高度自动生成
// 第2页、第3页……
//
// export_001.png
// export_002.png
//
// 当前版本暂未启用
// ======================================

function splitPages() {

    // TODO

}

// ======================================
// End
// ======================================
