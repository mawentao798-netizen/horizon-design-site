const assetBase = `${import.meta.env.BASE_URL}case-assets/`
const normalizeAssetSrc = (value) =>
  typeof value === 'string' && value.startsWith('/static/case-assets/')
    ? `${assetBase}${value.slice('/static/case-assets/'.length)}`
    : value

function normalizeImageRecord(record) {
  if (!record || typeof record !== 'object') return record
  if ('src' in record) record.src = normalizeAssetSrc(record.src)
  return record
}

function normalizeProject(project) {
  normalizeImageRecord(project.cover)
  normalizeImageRecord(project.facadeAnalysis)
  project.previewImages?.forEach(normalizeImageRecord)
  project.images?.forEach(normalizeImageRecord)
  return project
}

const rawSiteData = {
  "brand": {
    "logo": {
      "src": "/static/case-assets/brand-logo.png",
      "w": 1254,
      "h": 1254
    },
    "portrait": {
      "src": "/static/case-assets/studio-portrait.webp",
      "w": 1400,
      "h": 933
    }
  },
  "projects": [
    {
      "slug": "商业-ex机器人展厅",
      "name": "EX机器人展厅",
      "category": "商业",
      "subtitle": "以参观节奏组织技术展示界面",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 9,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-ex机器人展厅/image-001.webp",
        "w": 1600,
        "h": 1488
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-001.webp",
          "section": "",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1488
        },
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-002.webp",
          "section": "",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1868
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-001.webp",
          "section": "",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1488
        },
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-002.webp",
          "section": "",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1868
        },
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-003.webp",
          "section": "",
          "originalName": "03.jpg",
          "index": 3,
          "w": 1600,
          "h": 2015
        },
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-004.webp",
          "section": "",
          "originalName": "04.jpg",
          "index": 4,
          "w": 1600,
          "h": 871
        },
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-005.webp",
          "section": "",
          "originalName": "05.jpg",
          "index": 5,
          "w": 1600,
          "h": 1595
        },
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-006.webp",
          "section": "",
          "originalName": "06.jpg",
          "index": 6,
          "w": 1600,
          "h": 1908
        },
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-007.webp",
          "section": "",
          "originalName": "07.jpg",
          "index": 7,
          "w": 1600,
          "h": 1167
        },
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-008.webp",
          "section": "",
          "originalName": "08.jpg",
          "index": 8,
          "w": 1600,
          "h": 2286
        },
        {
          "src": "/static/case-assets/商业-ex机器人展厅/image-009.webp",
          "section": "",
          "originalName": "09.jpg",
          "index": 9,
          "w": 1600,
          "h": 2077
        }
      ]
    },
    {
      "slug": "商业-coffe-杭州",
      "name": "coffe·杭州",
      "category": "商业",
      "subtitle": "回应城市停留的咖啡复合空间",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 8,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-coffe-杭州/image-001.webp",
        "w": 1600,
        "h": 1600
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-coffe-杭州/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-coffe-杭州/image-002.webp",
          "section": "",
          "originalName": "2.jpg",
          "index": 2,
          "w": 1600,
          "h": 1600
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-coffe-杭州/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-coffe-杭州/image-002.webp",
          "section": "",
          "originalName": "2.jpg",
          "index": 2,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-coffe-杭州/image-003.webp",
          "section": "",
          "originalName": "3.jpg",
          "index": 3,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-coffe-杭州/image-004.webp",
          "section": "",
          "originalName": "4.jpg",
          "index": 4,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-coffe-杭州/image-005.webp",
          "section": "",
          "originalName": "5.jpg",
          "index": 5,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-coffe-杭州/image-006.webp",
          "section": "",
          "originalName": "6.jpg",
          "index": 6,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-coffe-杭州/image-007.webp",
          "section": "",
          "originalName": "7.jpg",
          "index": 7,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-coffe-杭州/image-008.webp",
          "section": "",
          "originalName": "8.jpg",
          "index": 8,
          "w": 1600,
          "h": 1600
        }
      ]
    },
    {
      "slug": "商业-全羊宴-大连",
      "name": "全羊宴·大连",
      "category": "商业",
      "subtitle": "在桌席、灯光与材料中建立用餐氛围",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 22,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-全羊宴-大连/image-001.webp",
        "w": 1600,
        "h": 900
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-001.webp",
          "section": "",
          "originalName": "1 (1).png",
          "index": 1,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-002.webp",
          "section": "",
          "originalName": "1 (2).png",
          "index": 2,
          "w": 1600,
          "h": 898
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-001.webp",
          "section": "",
          "originalName": "1 (1).png",
          "index": 1,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-002.webp",
          "section": "",
          "originalName": "1 (2).png",
          "index": 2,
          "w": 1600,
          "h": 898
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-003.webp",
          "section": "",
          "originalName": "2.png",
          "index": 3,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-004.webp",
          "section": "",
          "originalName": "3 (1).png",
          "index": 4,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-005.webp",
          "section": "",
          "originalName": "3 (2).png",
          "index": 5,
          "w": 1600,
          "h": 898
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-006.webp",
          "section": "",
          "originalName": "4 (1).jpg",
          "index": 6,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-007.webp",
          "section": "",
          "originalName": "4 (1).png",
          "index": 7,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-008.webp",
          "section": "",
          "originalName": "4 (2).png",
          "index": 8,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-009.webp",
          "section": "",
          "originalName": "4 (3).png",
          "index": 9,
          "w": 1600,
          "h": 898
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-010.webp",
          "section": "",
          "originalName": "4 (4).png",
          "index": 10,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-011.webp",
          "section": "",
          "originalName": "5 (1).jpg",
          "index": 11,
          "w": 1600,
          "h": 1664
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-012.webp",
          "section": "",
          "originalName": "5 (2).jpg",
          "index": 12,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-013.webp",
          "section": "",
          "originalName": "5 (3).jpg",
          "index": 13,
          "w": 1600,
          "h": 1262
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-014.webp",
          "section": "",
          "originalName": "5 (4).jpg",
          "index": 14,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-015.webp",
          "section": "",
          "originalName": "6 (1).jpg",
          "index": 15,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-016.webp",
          "section": "",
          "originalName": "6 (2).jpg",
          "index": 16,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-017.webp",
          "section": "",
          "originalName": "6 (3).jpg",
          "index": 17,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-018.webp",
          "section": "",
          "originalName": "6 (4).jpg",
          "index": 18,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-019.webp",
          "section": "",
          "originalName": "6 (5).jpg",
          "index": 19,
          "w": 1556,
          "h": 1836
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-020.webp",
          "section": "",
          "originalName": "6 (6).jpg",
          "index": 20,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-021.webp",
          "section": "",
          "originalName": "6 (7).jpg",
          "index": 21,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-全羊宴-大连/image-022.webp",
          "section": "",
          "originalName": "6 (9).jpg",
          "index": 22,
          "w": 1600,
          "h": 1600
        }
      ]
    },
    {
      "slug": "商业-卓越检测公司办公室-太原",
      "name": "卓越检测公司办公室·太原",
      "category": "商业",
      "subtitle": "企业效率与品牌可信度的空间表达",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 17,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-001.webp",
        "w": 1600,
        "h": 502
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-001.webp",
          "section": "",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 502
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-002.webp",
          "section": "",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1111
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-001.webp",
          "section": "",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 502
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-002.webp",
          "section": "",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1111
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-003.webp",
          "section": "",
          "originalName": "03.jpg",
          "index": 3,
          "w": 1600,
          "h": 1110
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-004.webp",
          "section": "",
          "originalName": "04.jpg",
          "index": 4,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-005.webp",
          "section": "",
          "originalName": "05.jpg",
          "index": 5,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-006.webp",
          "section": "",
          "originalName": "06.jpg",
          "index": 6,
          "w": 1600,
          "h": 1175
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-007.webp",
          "section": "",
          "originalName": "07.jpg",
          "index": 7,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-008.webp",
          "section": "",
          "originalName": "08.jpg",
          "index": 8,
          "w": 1600,
          "h": 965
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-009.webp",
          "section": "",
          "originalName": "09.jpg",
          "index": 9,
          "w": 1600,
          "h": 748
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-010.webp",
          "section": "",
          "originalName": "10.jpg",
          "index": 10,
          "w": 1600,
          "h": 1073
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-011.webp",
          "section": "",
          "originalName": "11.jpg",
          "index": 11,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-012.webp",
          "section": "",
          "originalName": "12.jpg",
          "index": 12,
          "w": 1600,
          "h": 1170
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-013.webp",
          "section": "",
          "originalName": "13.jpg",
          "index": 13,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-014.webp",
          "section": "",
          "originalName": "14.jpg",
          "index": 14,
          "w": 1600,
          "h": 1173
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-015.webp",
          "section": "",
          "originalName": "15.jpg",
          "index": 15,
          "w": 1600,
          "h": 1226
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-016.webp",
          "section": "",
          "originalName": "16.jpg",
          "index": 16,
          "w": 1600,
          "h": 750
        },
        {
          "src": "/static/case-assets/商业-卓越检测公司办公室-太原/image-017.webp",
          "section": "",
          "originalName": "17.jpg",
          "index": 17,
          "w": 1600,
          "h": 1280
        }
      ]
    },
    {
      "slug": "商业-大连理工大学会所",
      "name": "大连理工大学会所",
      "category": "商业",
      "subtitle": "从功能路径出发形成空间记忆点",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 35,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-大连理工大学会所/image-001.webp",
        "w": 1600,
        "h": 800
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-001.webp",
          "section": "",
          "originalName": "ktv (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-002.webp",
          "section": "",
          "originalName": "ktv (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 800
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-001.webp",
          "section": "",
          "originalName": "ktv (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-002.webp",
          "section": "",
          "originalName": "ktv (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-003.webp",
          "section": "",
          "originalName": "ktv (3).jpg",
          "index": 3,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-004.webp",
          "section": "",
          "originalName": "ktv (4).jpg",
          "index": 4,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-005.webp",
          "section": "",
          "originalName": "ktv (5).jpg",
          "index": 5,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-006.webp",
          "section": "",
          "originalName": "大包厢 (1).jpg",
          "index": 6,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-007.webp",
          "section": "",
          "originalName": "大包厢 (2).jpg",
          "index": 7,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-008.webp",
          "section": "",
          "originalName": "大包厢 (3).jpg",
          "index": 8,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-009.webp",
          "section": "",
          "originalName": "大包厢 (4).jpg",
          "index": 9,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-010.webp",
          "section": "",
          "originalName": "大包厢 (5).jpg",
          "index": 10,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-011.webp",
          "section": "",
          "originalName": "大包厢 (6).jpg",
          "index": 11,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-012.webp",
          "section": "",
          "originalName": "大包厢 (7).jpg",
          "index": 12,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-013.webp",
          "section": "",
          "originalName": "大包厢 (8).jpg",
          "index": 13,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-014.webp",
          "section": "",
          "originalName": "大包厢 (9).jpg",
          "index": 14,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-015.webp",
          "section": "",
          "originalName": "小包厢 (1).jpg",
          "index": 15,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-016.webp",
          "section": "",
          "originalName": "小包厢 (2).jpg",
          "index": 16,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-017.webp",
          "section": "",
          "originalName": "小包厢 (3).jpg",
          "index": 17,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-018.webp",
          "section": "",
          "originalName": "小包厢 (4).jpg",
          "index": 18,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-019.webp",
          "section": "",
          "originalName": "小包厢 (5).jpg",
          "index": 19,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-020.webp",
          "section": "",
          "originalName": "小包厢 (6).jpg",
          "index": 20,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-021.webp",
          "section": "",
          "originalName": "小包厢 (7).jpg",
          "index": 21,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-022.webp",
          "section": "",
          "originalName": "棋牌室 (1).jpg",
          "index": 22,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-023.webp",
          "section": "",
          "originalName": "棋牌室 (2).jpg",
          "index": 23,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-024.webp",
          "section": "",
          "originalName": "棋牌室 (3).jpg",
          "index": 24,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-025.webp",
          "section": "",
          "originalName": "棋牌室 (4).jpg",
          "index": 25,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-026.webp",
          "section": "",
          "originalName": "棋牌室 (5).jpg",
          "index": 26,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-027.webp",
          "section": "",
          "originalName": "棋牌室 (6).jpg",
          "index": 27,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-028.webp",
          "section": "",
          "originalName": "棋牌室 (7).jpg",
          "index": 28,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-029.webp",
          "section": "",
          "originalName": "茶室 (1).jpg",
          "index": 29,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-030.webp",
          "section": "",
          "originalName": "茶室 (2).jpg",
          "index": 30,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-031.webp",
          "section": "",
          "originalName": "茶室 (3).jpg",
          "index": 31,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-032.webp",
          "section": "",
          "originalName": "茶室 (4).jpg",
          "index": 32,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-033.webp",
          "section": "",
          "originalName": "茶室 (5).jpg",
          "index": 33,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-034.webp",
          "section": "",
          "originalName": "茶室 (6).jpg",
          "index": 34,
          "w": 1600,
          "h": 1066
        },
        {
          "src": "/static/case-assets/商业-大连理工大学会所/image-035.webp",
          "section": "",
          "originalName": "茶室 (7).jpg",
          "index": 35,
          "w": 1600,
          "h": 1067
        }
      ]
    },
    {
      "slug": "商业-大连理工大学风雨操场",
      "name": "大连理工大学风雨操场",
      "category": "商业",
      "subtitle": "从功能路径出发形成空间记忆点",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 14,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-大连理工大学风雨操场/image-001.webp",
        "w": 1600,
        "h": 706
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 706
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 710
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 706
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 710
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-003.webp",
          "section": "",
          "originalName": "1 (3).jpg",
          "index": 3,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-004.webp",
          "section": "",
          "originalName": "1 (4).jpg",
          "index": 4,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-005.webp",
          "section": "",
          "originalName": "1 (5).jpg",
          "index": 5,
          "w": 1600,
          "h": 701
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-006.webp",
          "section": "",
          "originalName": "1 (6).jpg",
          "index": 6,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-007.webp",
          "section": "",
          "originalName": "1 (7).jpg",
          "index": 7,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-008.webp",
          "section": "",
          "originalName": "1 (8).jpg",
          "index": 8,
          "w": 1600,
          "h": 866
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-009.webp",
          "section": "",
          "originalName": "1 (9).jpg",
          "index": 9,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-010.webp",
          "section": "",
          "originalName": "1 (10).jpg",
          "index": 10,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-011.webp",
          "section": "",
          "originalName": "1 (11).jpg",
          "index": 11,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-012.webp",
          "section": "",
          "originalName": "1 (12).jpg",
          "index": 12,
          "w": 1600,
          "h": 1002
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-013.webp",
          "section": "",
          "originalName": "1 (13).jpg",
          "index": 13,
          "w": 1600,
          "h": 876
        },
        {
          "src": "/static/case-assets/商业-大连理工大学风雨操场/image-014.webp",
          "section": "",
          "originalName": "1 (14).jpg",
          "index": 14,
          "w": 1600,
          "h": 941
        }
      ]
    },
    {
      "slug": "商业-小川家",
      "name": "小川家",
      "category": "商业",
      "subtitle": "在桌席、灯光与材料中建立用餐氛围",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 12,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-小川家/image-001.webp",
        "w": 1600,
        "h": 1050
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-小川家/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 1050
        },
        {
          "src": "/static/case-assets/商业-小川家/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 800
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-小川家/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 1050
        },
        {
          "src": "/static/case-assets/商业-小川家/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-小川家/image-003.webp",
          "section": "",
          "originalName": "2 (1).jpg",
          "index": 3,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-小川家/image-004.webp",
          "section": "",
          "originalName": "2 (2).jpg",
          "index": 4,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-小川家/image-005.webp",
          "section": "",
          "originalName": "2 (3).jpg",
          "index": 5,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-小川家/image-006.webp",
          "section": "",
          "originalName": "2 (4).jpg",
          "index": 6,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-小川家/image-007.webp",
          "section": "",
          "originalName": "2 (5).jpg",
          "index": 7,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-小川家/image-008.webp",
          "section": "",
          "originalName": "2 (6).jpg",
          "index": 8,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-小川家/image-009.webp",
          "section": "",
          "originalName": "2 (7).jpg",
          "index": 9,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-小川家/image-010.webp",
          "section": "",
          "originalName": "2 (8).jpg",
          "index": 10,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-小川家/image-011.webp",
          "section": "",
          "originalName": "2 (9).jpg",
          "index": 11,
          "w": 1600,
          "h": 1436
        },
        {
          "src": "/static/case-assets/商业-小川家/image-012.webp",
          "section": "",
          "originalName": "2 (10).jpg",
          "index": 12,
          "w": 1600,
          "h": 1600
        }
      ]
    },
    {
      "slug": "商业-岚里coffee-wine-厦门",
      "name": "岚里COFFEE&WINE·厦门",
      "category": "商业",
      "subtitle": "回应城市停留的咖啡复合空间",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 20,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-001.webp",
        "w": 1600,
        "h": 2285
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-001.webp",
          "section": "",
          "originalName": "一层白天 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 2285
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-002.webp",
          "section": "",
          "originalName": "一层白天 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 973
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-001.webp",
          "section": "",
          "originalName": "一层白天 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 2285
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-002.webp",
          "section": "",
          "originalName": "一层白天 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 973
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-003.webp",
          "section": "",
          "originalName": "一层白天 (3).jpg",
          "index": 3,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-004.webp",
          "section": "",
          "originalName": "一层白天 (4).jpg",
          "index": 4,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-005.webp",
          "section": "",
          "originalName": "一层白天 (5).jpg",
          "index": 5,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-006.webp",
          "section": "",
          "originalName": "一层白天 (6).jpg",
          "index": 6,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-007.webp",
          "section": "",
          "originalName": "一层白天 (7).jpg",
          "index": 7,
          "w": 1600,
          "h": 1182
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-008.webp",
          "section": "",
          "originalName": "一层白天 (8).jpg",
          "index": 8,
          "w": 1600,
          "h": 970
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-009.webp",
          "section": "",
          "originalName": "一层白天 (9).jpg",
          "index": 9,
          "w": 1600,
          "h": 975
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-010.webp",
          "section": "",
          "originalName": "一层白天 (10).jpg",
          "index": 10,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-011.webp",
          "section": "",
          "originalName": "三层 (1).jpg",
          "index": 11,
          "w": 1600,
          "h": 1242
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-012.webp",
          "section": "",
          "originalName": "三层 (2).jpg",
          "index": 12,
          "w": 1600,
          "h": 1226
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-013.webp",
          "section": "",
          "originalName": "三层 (3).jpg",
          "index": 13,
          "w": 1600,
          "h": 1254
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-014.webp",
          "section": "",
          "originalName": "三层 (4).jpg",
          "index": 14,
          "w": 1600,
          "h": 1405
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-015.webp",
          "section": "",
          "originalName": "三层 (5).jpg",
          "index": 15,
          "w": 1600,
          "h": 1395
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-016.webp",
          "section": "",
          "originalName": "夜景 (1).jpg",
          "index": 16,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-017.webp",
          "section": "",
          "originalName": "夜景 (2).jpg",
          "index": 17,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-018.webp",
          "section": "",
          "originalName": "夜景 (3).jpg",
          "index": 18,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-019.webp",
          "section": "",
          "originalName": "夜景 (4).jpg",
          "index": 19,
          "w": 1600,
          "h": 980
        },
        {
          "src": "/static/case-assets/商业-岚里coffee-wine-厦门/image-020.webp",
          "section": "",
          "originalName": "夜景 (5).jpg",
          "index": 20,
          "w": 1600,
          "h": 977
        }
      ]
    },
    {
      "slug": "商业-未来科技馆展厅",
      "name": "未来科技馆展厅",
      "category": "商业",
      "subtitle": "以参观节奏组织技术展示界面",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 20,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-未来科技馆展厅/image-001.webp",
        "w": 1600,
        "h": 900
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-001.webp",
          "section": "展厅",
          "originalName": "01.png",
          "index": 1,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-002.webp",
          "section": "展厅",
          "originalName": "02.png",
          "index": 2,
          "w": 1600,
          "h": 900
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-001.webp",
          "section": "展厅",
          "originalName": "01.png",
          "index": 1,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-002.webp",
          "section": "展厅",
          "originalName": "02.png",
          "index": 2,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-003.webp",
          "section": "展厅",
          "originalName": "03.png",
          "index": 3,
          "w": 1600,
          "h": 912
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-004.webp",
          "section": "展厅",
          "originalName": "08.png",
          "index": 4,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-005.webp",
          "section": "展厅",
          "originalName": "09.png",
          "index": 5,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-006.webp",
          "section": "展厅",
          "originalName": "15.png",
          "index": 6,
          "w": 1600,
          "h": 1099
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-007.webp",
          "section": "展厅",
          "originalName": "17.png",
          "index": 7,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-008.webp",
          "section": "展厅",
          "originalName": "20.png",
          "index": 8,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-009.webp",
          "section": "餐厅",
          "originalName": "01.jpg",
          "index": 9,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-010.webp",
          "section": "餐厅",
          "originalName": "02.jpg",
          "index": 10,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-011.webp",
          "section": "餐厅",
          "originalName": "03.jpg",
          "index": 11,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-012.webp",
          "section": "餐厅",
          "originalName": "04.jpg",
          "index": 12,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-013.webp",
          "section": "餐厅",
          "originalName": "05.jpg",
          "index": 13,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-014.webp",
          "section": "餐厅",
          "originalName": "06.jpg",
          "index": 14,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-015.webp",
          "section": "餐厅",
          "originalName": "07.jpg",
          "index": 15,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-016.webp",
          "section": "餐厅",
          "originalName": "08.jpg",
          "index": 16,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-017.webp",
          "section": "餐厅",
          "originalName": "09.jpg",
          "index": 17,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-018.webp",
          "section": "餐厅",
          "originalName": "10.jpg",
          "index": 18,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-019.webp",
          "section": "餐厅",
          "originalName": "11.jpg",
          "index": 19,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-未来科技馆展厅/image-020.webp",
          "section": "餐厅",
          "originalName": "12.jpg",
          "index": 20,
          "w": 1600,
          "h": 1200
        }
      ]
    },
    {
      "slug": "商业-林夕阁-大连",
      "name": "林夕阁·大连",
      "category": "商业",
      "subtitle": "从功能路径出发形成空间记忆点",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 18,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-林夕阁-大连/image-001.webp",
        "w": 1600,
        "h": 1200
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-001.webp",
          "section": "",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-002.webp",
          "section": "",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 977
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-001.webp",
          "section": "",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-002.webp",
          "section": "",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 977
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-003.webp",
          "section": "",
          "originalName": "03.jpg",
          "index": 3,
          "w": 1600,
          "h": 979
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-004.webp",
          "section": "",
          "originalName": "04.jpg",
          "index": 4,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-005.webp",
          "section": "",
          "originalName": "05.jpg",
          "index": 5,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-006.webp",
          "section": "",
          "originalName": "06.jpg",
          "index": 6,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-007.webp",
          "section": "",
          "originalName": "07.jpg",
          "index": 7,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-008.webp",
          "section": "",
          "originalName": "08.jpg",
          "index": 8,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-009.webp",
          "section": "",
          "originalName": "09.jpg",
          "index": 9,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-010.webp",
          "section": "",
          "originalName": "10.jpg",
          "index": 10,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-011.webp",
          "section": "",
          "originalName": "11.jpg",
          "index": 11,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-012.webp",
          "section": "",
          "originalName": "12.jpg",
          "index": 12,
          "w": 1600,
          "h": 727
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-013.webp",
          "section": "",
          "originalName": "13.jpg",
          "index": 13,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-014.webp",
          "section": "",
          "originalName": "14.jpg",
          "index": 14,
          "w": 1600,
          "h": 758
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-015.webp",
          "section": "",
          "originalName": "15.jpg",
          "index": 15,
          "w": 1600,
          "h": 1085
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-016.webp",
          "section": "",
          "originalName": "16.jpg",
          "index": 16,
          "w": 1600,
          "h": 1099
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-017.webp",
          "section": "",
          "originalName": "17.jpg",
          "index": 17,
          "w": 1600,
          "h": 1097
        },
        {
          "src": "/static/case-assets/商业-林夕阁-大连/image-018.webp",
          "section": "",
          "originalName": "18.jpg",
          "index": 18,
          "w": 1600,
          "h": 1097
        }
      ]
    },
    {
      "slug": "商业-欣全欣餐厅-大连",
      "name": "欣全欣餐厅·大连",
      "category": "商业",
      "subtitle": "在桌席、灯光与材料中建立用餐氛围",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 7,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-欣全欣餐厅-大连/image-001.webp",
        "w": 1600,
        "h": 1440
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-欣全欣餐厅-大连/image-001.webp",
          "section": "",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1440
        },
        {
          "src": "/static/case-assets/商业-欣全欣餐厅-大连/image-002.webp",
          "section": "",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1128
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-欣全欣餐厅-大连/image-001.webp",
          "section": "",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1440
        },
        {
          "src": "/static/case-assets/商业-欣全欣餐厅-大连/image-002.webp",
          "section": "",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1128
        },
        {
          "src": "/static/case-assets/商业-欣全欣餐厅-大连/image-003.webp",
          "section": "",
          "originalName": "03.jpg",
          "index": 3,
          "w": 1600,
          "h": 1440
        },
        {
          "src": "/static/case-assets/商业-欣全欣餐厅-大连/image-004.webp",
          "section": "",
          "originalName": "04.jpg",
          "index": 4,
          "w": 1600,
          "h": 362
        },
        {
          "src": "/static/case-assets/商业-欣全欣餐厅-大连/image-005.webp",
          "section": "",
          "originalName": "05.jpg",
          "index": 5,
          "w": 1600,
          "h": 1025
        },
        {
          "src": "/static/case-assets/商业-欣全欣餐厅-大连/image-006.webp",
          "section": "",
          "originalName": "06.jpg",
          "index": 6,
          "w": 1600,
          "h": 1074
        },
        {
          "src": "/static/case-assets/商业-欣全欣餐厅-大连/image-007.webp",
          "section": "",
          "originalName": "07.jpg",
          "index": 7,
          "w": 1600,
          "h": 1440
        }
      ]
    },
    {
      "slug": "商业-水系统设备展厅-沈阳",
      "name": "水系统设备展厅·沈阳",
      "category": "商业",
      "subtitle": "以参观节奏组织技术展示界面",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 10,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-001.webp",
        "w": 1600,
        "h": 1600
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 800
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-003.webp",
          "section": "",
          "originalName": "2 (1).jpg",
          "index": 3,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-004.webp",
          "section": "",
          "originalName": "2 (2).jpg",
          "index": 4,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-005.webp",
          "section": "",
          "originalName": "2 (3).jpg",
          "index": 5,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-006.webp",
          "section": "",
          "originalName": "2 (4).jpg",
          "index": 6,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-007.webp",
          "section": "",
          "originalName": "2 (5).jpg",
          "index": 7,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-008.webp",
          "section": "",
          "originalName": "2 (6).jpg",
          "index": 8,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-009.webp",
          "section": "",
          "originalName": "2 (7).jpg",
          "index": 9,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-水系统设备展厅-沈阳/image-010.webp",
          "section": "",
          "originalName": "2 (8).jpg",
          "index": 10,
          "w": 1600,
          "h": 1600
        }
      ]
    },
    {
      "slug": "商业-牧城驿教堂",
      "name": "牧城驿教堂",
      "category": "商业",
      "subtitle": "在垂直尺度与光线秩序中组织仪式感",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 6,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-牧城驿教堂/image-001.webp",
        "w": 1600,
        "h": 1600
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-牧城驿教堂/image-001.webp",
          "section": "",
          "originalName": "10.jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-牧城驿教堂/image-002.webp",
          "section": "",
          "originalName": "14.jpg",
          "index": 2,
          "w": 1600,
          "h": 1600
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-牧城驿教堂/image-001.webp",
          "section": "",
          "originalName": "10.jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-牧城驿教堂/image-002.webp",
          "section": "",
          "originalName": "14.jpg",
          "index": 2,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-牧城驿教堂/image-003.webp",
          "section": "",
          "originalName": "15.jpg",
          "index": 3,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-牧城驿教堂/image-004.webp",
          "section": "",
          "originalName": "16.jpg",
          "index": 4,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/商业-牧城驿教堂/image-005.webp",
          "section": "",
          "originalName": "19.jpg",
          "index": 5,
          "w": 1600,
          "h": 1406
        },
        {
          "src": "/static/case-assets/商业-牧城驿教堂/image-006.webp",
          "section": "",
          "originalName": "32.jpg",
          "index": 6,
          "w": 1600,
          "h": 1600
        }
      ]
    },
    {
      "slug": "商业-花园教堂-武昌",
      "name": "花园教堂·武昌",
      "category": "商业",
      "subtitle": "在垂直尺度与光线秩序中组织仪式感",
      "intro": "以界面、动线和停留体验组织商业空间。",
      "imageCount": 13,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/商业-花园教堂-武昌/image-001.webp",
        "w": 1600,
        "h": 1103
      },
      "previewImages": [
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-001.webp",
          "section": "",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1103
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-002.webp",
          "section": "",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1032
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-001.webp",
          "section": "",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1103
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-002.webp",
          "section": "",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1032
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-003.webp",
          "section": "",
          "originalName": "03.jpg",
          "index": 3,
          "w": 1600,
          "h": 1080
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-004.webp",
          "section": "",
          "originalName": "04.jpg",
          "index": 4,
          "w": 1600,
          "h": 642
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-005.webp",
          "section": "",
          "originalName": "05.jpg",
          "index": 5,
          "w": 1600,
          "h": 1440
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-006.webp",
          "section": "",
          "originalName": "06.jpg",
          "index": 6,
          "w": 1600,
          "h": 1304
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-007.webp",
          "section": "",
          "originalName": "07.jpg",
          "index": 7,
          "w": 1600,
          "h": 1440
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-008.webp",
          "section": "",
          "originalName": "08.jpg",
          "index": 8,
          "w": 1600,
          "h": 1440
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-009.webp",
          "section": "",
          "originalName": "09.jpg",
          "index": 9,
          "w": 1600,
          "h": 1440
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-010.webp",
          "section": "",
          "originalName": "10.jpg",
          "index": 10,
          "w": 1600,
          "h": 1440
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-011.webp",
          "section": "",
          "originalName": "11.jpg",
          "index": 11,
          "w": 1600,
          "h": 1440
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-012.webp",
          "section": "",
          "originalName": "12.jpg",
          "index": 12,
          "w": 1600,
          "h": 1440
        },
        {
          "src": "/static/case-assets/商业-花园教堂-武昌/image-013.webp",
          "section": "",
          "originalName": "13.jpg",
          "index": 13,
          "w": 1600,
          "h": 1440
        }
      ]
    },
    {
      "slug": "洗浴-万豪-水一方-丹东",
      "name": "万豪·水一方·丹东",
      "category": "洗浴",
      "subtitle": "围绕水疗、休憩和服务动线展开",
      "intro": "以水疗动线、光线层次和材料触感建立休闲场景。",
      "imageCount": 127,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-001.webp",
        "w": 1600,
        "h": 1600
      },
      "previewImages": [
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-001.webp",
          "section": "1.大堂",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-002.webp",
          "section": "1.大堂",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1600
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-001.webp",
          "section": "1.大堂",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-002.webp",
          "section": "1.大堂",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-003.webp",
          "section": "1.大堂",
          "originalName": "03.jpg",
          "index": 3,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-004.webp",
          "section": "1.大堂",
          "originalName": "04.jpg",
          "index": 4,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-005.webp",
          "section": "1.大堂",
          "originalName": "05.jpg",
          "index": 5,
          "w": 1600,
          "h": 716
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-006.webp",
          "section": "1.大堂",
          "originalName": "06.jpg",
          "index": 6,
          "w": 1600,
          "h": 906
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-007.webp",
          "section": "2.男浴",
          "originalName": "01.jpg",
          "index": 7,
          "w": 1500,
          "h": 1500
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-008.webp",
          "section": "2.男浴",
          "originalName": "02.jpg",
          "index": 8,
          "w": 1500,
          "h": 1500
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-009.webp",
          "section": "2.男浴",
          "originalName": "03.jpg",
          "index": 9,
          "w": 1600,
          "h": 1083
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-010.webp",
          "section": "2.男浴",
          "originalName": "04.jpg",
          "index": 10,
          "w": 1600,
          "h": 1006
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-011.webp",
          "section": "2.男浴",
          "originalName": "05.jpg",
          "index": 11,
          "w": 1600,
          "h": 1254
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-012.webp",
          "section": "2.男浴",
          "originalName": "06.jpg",
          "index": 12,
          "w": 1600,
          "h": 696
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-013.webp",
          "section": "2.男浴",
          "originalName": "07.jpg",
          "index": 13,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-014.webp",
          "section": "2.男浴",
          "originalName": "09.jpg",
          "index": 14,
          "w": 1600,
          "h": 1325
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-015.webp",
          "section": "2.男浴",
          "originalName": "12.jpg",
          "index": 15,
          "w": 1600,
          "h": 1324
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-016.webp",
          "section": "2.男浴",
          "originalName": "14.jpg",
          "index": 16,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-017.webp",
          "section": "2.男浴",
          "originalName": "16.jpg",
          "index": 17,
          "w": 1600,
          "h": 1510
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-018.webp",
          "section": "2.男浴",
          "originalName": "17.jpg",
          "index": 18,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-019.webp",
          "section": "2.男浴",
          "originalName": "18.jpg",
          "index": 19,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-020.webp",
          "section": "2.男浴",
          "originalName": "19.jpg",
          "index": 20,
          "w": 1600,
          "h": 1357
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-021.webp",
          "section": "2.男浴",
          "originalName": "20.jpg",
          "index": 21,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-022.webp",
          "section": "2.男浴",
          "originalName": "21.jpg",
          "index": 22,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-023.webp",
          "section": "2.男浴",
          "originalName": "22.jpg",
          "index": 23,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-024.webp",
          "section": "2.男浴",
          "originalName": "24.jpg",
          "index": 24,
          "w": 1600,
          "h": 1345
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-025.webp",
          "section": "3.1二楼休闲区",
          "originalName": "1.jpg",
          "index": 25,
          "w": 1600,
          "h": 1066
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-026.webp",
          "section": "3.1二楼休闲区",
          "originalName": "2.jpg",
          "index": 26,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-027.webp",
          "section": "3.1二楼休闲区",
          "originalName": "3.jpg",
          "index": 27,
          "w": 1600,
          "h": 1066
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-028.webp",
          "section": "3.1二楼休闲区",
          "originalName": "4.jpg",
          "index": 28,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-029.webp",
          "section": "3.1二楼休闲区",
          "originalName": "5.jpg",
          "index": 29,
          "w": 1600,
          "h": 1331
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-030.webp",
          "section": "3.1二楼休闲区",
          "originalName": "6.jpg",
          "index": 30,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-031.webp",
          "section": "3.1二楼休闲区",
          "originalName": "8.jpg",
          "index": 31,
          "w": 1600,
          "h": 1066
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-032.webp",
          "section": "3.1二楼休闲区",
          "originalName": "9.jpg",
          "index": 32,
          "w": 1600,
          "h": 1254
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-033.webp",
          "section": "3.1二楼休闲区",
          "originalName": "10.jpg",
          "index": 33,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-034.webp",
          "section": "3.1二楼休闲区",
          "originalName": "11.jpg",
          "index": 34,
          "w": 1600,
          "h": 1909
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-035.webp",
          "section": "3.1二楼休闲区",
          "originalName": "13.jpg",
          "index": 35,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-036.webp",
          "section": "3.1二楼休闲区",
          "originalName": "14.jpg",
          "index": 36,
          "w": 1600,
          "h": 616
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-037.webp",
          "section": "3.1二楼休闲区",
          "originalName": "15.jpg",
          "index": 37,
          "w": 1600,
          "h": 1277
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-038.webp",
          "section": "3.1二楼休闲区",
          "originalName": "16.jpg",
          "index": 38,
          "w": 1600,
          "h": 1149
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-039.webp",
          "section": "3.1二楼休闲区",
          "originalName": "17.jpg",
          "index": 39,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-040.webp",
          "section": "3.1二楼休闲区",
          "originalName": "20.jpg",
          "index": 40,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-041.webp",
          "section": "3.1二楼休闲区",
          "originalName": "21.jpg",
          "index": 41,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-042.webp",
          "section": "3.1二楼休闲区",
          "originalName": "23.jpg",
          "index": 42,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-043.webp",
          "section": "3.1二楼休闲区",
          "originalName": "24.jpg",
          "index": 43,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-044.webp",
          "section": "3.1二楼休闲区",
          "originalName": "26.jpg",
          "index": 44,
          "w": 1600,
          "h": 2020
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-045.webp",
          "section": "3.1二楼休闲区",
          "originalName": "27.jpg",
          "index": 45,
          "w": 1600,
          "h": 1066
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-046.webp",
          "section": "3.1二楼休闲区",
          "originalName": "28.jpg",
          "index": 46,
          "w": 1600,
          "h": 1066
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-047.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "01.jpg",
          "index": 47,
          "w": 1600,
          "h": 1075
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-048.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "02.jpg",
          "index": 48,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-049.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "03.jpg",
          "index": 49,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-050.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "04.jpg",
          "index": 50,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-051.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "05.jpg",
          "index": 51,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-052.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "06.jpg",
          "index": 52,
          "w": 1600,
          "h": 943
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-053.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "07.jpg",
          "index": 53,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-054.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "08.jpg",
          "index": 54,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-055.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "09.jpg",
          "index": 55,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-056.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "10.jpg",
          "index": 56,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-057.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "11.jpg",
          "index": 57,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-058.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "12.jpg",
          "index": 58,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-059.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "13.jpg",
          "index": 59,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-060.webp",
          "section": "3.2恒温室+高温室+烟吧效果图",
          "originalName": "14.jpg",
          "index": 60,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-061.webp",
          "section": "3.女浴效果图",
          "originalName": "01.jpg",
          "index": 61,
          "w": 1600,
          "h": 1254
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-062.webp",
          "section": "3.女浴效果图",
          "originalName": "02.jpg",
          "index": 62,
          "w": 1600,
          "h": 1173
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-063.webp",
          "section": "3.女浴效果图",
          "originalName": "04.jpg",
          "index": 63,
          "w": 1600,
          "h": 1212
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-064.webp",
          "section": "3.女浴效果图",
          "originalName": "05.jpg",
          "index": 64,
          "w": 1600,
          "h": 1105
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-065.webp",
          "section": "3.女浴效果图",
          "originalName": "07.jpg",
          "index": 65,
          "w": 1600,
          "h": 1212
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-066.webp",
          "section": "3.女浴效果图",
          "originalName": "09.jpg",
          "index": 66,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-067.webp",
          "section": "3.女浴效果图",
          "originalName": "13.jpg",
          "index": 67,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-068.webp",
          "section": "3.女浴效果图",
          "originalName": "14.jpg",
          "index": 68,
          "w": 1600,
          "h": 1205
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-069.webp",
          "section": "3.女浴效果图",
          "originalName": "15.jpg",
          "index": 69,
          "w": 1600,
          "h": 1242
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-070.webp",
          "section": "3.女浴效果图",
          "originalName": "16.jpg",
          "index": 70,
          "w": 1600,
          "h": 1182
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-071.webp",
          "section": "3.女浴效果图",
          "originalName": "17.jpg",
          "index": 71,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-072.webp",
          "section": "3.女浴效果图",
          "originalName": "19.jpg",
          "index": 72,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-073.webp",
          "section": "3.女浴效果图",
          "originalName": "21.jpg",
          "index": 73,
          "w": 1600,
          "h": 1139
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-074.webp",
          "section": "3.女浴效果图",
          "originalName": "22.jpg",
          "index": 74,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-075.webp",
          "section": "3.女浴效果图",
          "originalName": "24.jpg",
          "index": 75,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-076.webp",
          "section": "3.女浴效果图",
          "originalName": "25.jpg",
          "index": 76,
          "w": 1600,
          "h": 1154
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-077.webp",
          "section": "3.女浴效果图",
          "originalName": "26.jpg",
          "index": 77,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-078.webp",
          "section": "3.女浴效果图",
          "originalName": "27.jpg",
          "index": 78,
          "w": 1600,
          "h": 1220
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-079.webp",
          "section": "3.女浴效果图",
          "originalName": "29.jpg",
          "index": 79,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-080.webp",
          "section": "3.女浴效果图",
          "originalName": "31.jpg",
          "index": 80,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-081.webp",
          "section": "3.女浴效果图",
          "originalName": "32.jpg",
          "index": 81,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-082.webp",
          "section": "3.女浴效果图",
          "originalName": "33.jpg",
          "index": 82,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-083.webp",
          "section": "3.女浴效果图",
          "originalName": "34.jpg",
          "index": 83,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-084.webp",
          "section": "3.女浴效果图",
          "originalName": "35.jpg",
          "index": 84,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-085.webp",
          "section": "3.女浴效果图",
          "originalName": "36.jpg",
          "index": 85,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-086.webp",
          "section": "3.女浴效果图",
          "originalName": "树池.jpg",
          "index": 86,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-087.webp",
          "section": "5.私汤效果图",
          "originalName": "01.jpg",
          "index": 87,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-088.webp",
          "section": "5.私汤效果图",
          "originalName": "02.jpg",
          "index": 88,
          "w": 1600,
          "h": 1086
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-089.webp",
          "section": "5.私汤效果图",
          "originalName": "03.jpg",
          "index": 89,
          "w": 1600,
          "h": 1005
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-090.webp",
          "section": "5.私汤效果图",
          "originalName": "04.jpg",
          "index": 90,
          "w": 1600,
          "h": 1037
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-091.webp",
          "section": "5.私汤效果图",
          "originalName": "05.jpg",
          "index": 91,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-092.webp",
          "section": "5.私汤效果图",
          "originalName": "06.jpg",
          "index": 92,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-093.webp",
          "section": "5.私汤效果图",
          "originalName": "07.jpg",
          "index": 93,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-094.webp",
          "section": "5.私汤效果图",
          "originalName": "08.jpg",
          "index": 94,
          "w": 1600,
          "h": 1135
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-095.webp",
          "section": "5.私汤效果图",
          "originalName": "09.jpg",
          "index": 95,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-096.webp",
          "section": "5.私汤效果图",
          "originalName": "10.jpg",
          "index": 96,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-097.webp",
          "section": "5.私汤效果图",
          "originalName": "11.jpg",
          "index": 97,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-098.webp",
          "section": "5.私汤效果图",
          "originalName": "12.jpg",
          "index": 98,
          "w": 1600,
          "h": 1133
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-099.webp",
          "section": "5.私汤效果图",
          "originalName": "13.jpg",
          "index": 99,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-100.webp",
          "section": "5.私汤效果图",
          "originalName": "14.jpg",
          "index": 100,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-101.webp",
          "section": "5.私汤效果图",
          "originalName": "15.jpg",
          "index": 101,
          "w": 1600,
          "h": 1020
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-102.webp",
          "section": "5.私汤效果图",
          "originalName": "16.jpg",
          "index": 102,
          "w": 1600,
          "h": 1163
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-103.webp",
          "section": "5.私汤效果图",
          "originalName": "17.jpg",
          "index": 103,
          "w": 1600,
          "h": 1018
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-104.webp",
          "section": "5.私汤效果图",
          "originalName": "18.jpg",
          "index": 104,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-105.webp",
          "section": "5.私汤效果图",
          "originalName": "19.jpg",
          "index": 105,
          "w": 1600,
          "h": 1126
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-106.webp",
          "section": "5.私汤效果图",
          "originalName": "20.jpg",
          "index": 106,
          "w": 1600,
          "h": 1097
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-107.webp",
          "section": "5.私汤效果图",
          "originalName": "21.jpg",
          "index": 107,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-108.webp",
          "section": "5.私汤效果图",
          "originalName": "22.jpg",
          "index": 108,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-109.webp",
          "section": "5.私汤效果图",
          "originalName": "23.jpg",
          "index": 109,
          "w": 1600,
          "h": 1135
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-110.webp",
          "section": "5.私汤效果图",
          "originalName": "24.jpg",
          "index": 110,
          "w": 1600,
          "h": 1175
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-111.webp",
          "section": "5.私汤效果图",
          "originalName": "25.jpg",
          "index": 111,
          "w": 1600,
          "h": 1175
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-112.webp",
          "section": "6.SPA+格子屋",
          "originalName": "spa带窗1.jpg",
          "index": 112,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-113.webp",
          "section": "6.SPA+格子屋",
          "originalName": "spa带窗003gai.jpg",
          "index": 113,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-114.webp",
          "section": "6.SPA+格子屋",
          "originalName": "休息大厅1.jpg",
          "index": 114,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-115.webp",
          "section": "6.SPA+格子屋",
          "originalName": "休息大厅.jpg",
          "index": 115,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-116.webp",
          "section": "6.SPA+格子屋",
          "originalName": "休息大厅走廊.jpg",
          "index": 116,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-117.webp",
          "section": "6.SPA+格子屋",
          "originalName": "休息大厅走廊N7.jpg",
          "index": 117,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-118.webp",
          "section": "6.SPA+格子屋",
          "originalName": "前厅2.jpg",
          "index": 118,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-119.webp",
          "section": "6.SPA+格子屋",
          "originalName": "夹层.jpg",
          "index": 119,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-120.webp",
          "section": "6.SPA+格子屋",
          "originalName": "夹层景观.jpg",
          "index": 120,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-121.webp",
          "section": "6.SPA+格子屋",
          "originalName": "帐篷区2.jpg",
          "index": 121,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-122.webp",
          "section": "6.SPA+格子屋",
          "originalName": "帐篷区003.jpg",
          "index": 122,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-123.webp",
          "section": "6.SPA+格子屋",
          "originalName": "帐篷区004.jpg",
          "index": 123,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-124.webp",
          "section": "6.SPA+格子屋",
          "originalName": "帐篷区.jpg",
          "index": 124,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-125.webp",
          "section": "6.SPA+格子屋",
          "originalName": "楼梯001.jpg",
          "index": 125,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-126.webp",
          "section": "6.SPA+格子屋",
          "originalName": "楼梯.jpg",
          "index": 126,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-万豪-水一方-丹东/image-127.webp",
          "section": "6.SPA+格子屋",
          "originalName": "楼梯间002.jpg",
          "index": 127,
          "w": 1600,
          "h": 1600
        }
      ]
    },
    {
      "slug": "洗浴-全天初见足疗洗浴-芜湖",
      "name": "全天初见足疗洗浴·芜湖",
      "category": "洗浴",
      "subtitle": "围绕水疗、休憩和服务动线展开",
      "intro": "以水疗动线、光线层次和材料触感建立休闲场景。",
      "imageCount": 164,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-001.webp",
        "w": 1600,
        "h": 1280
      },
      "previewImages": [
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-001.webp",
          "section": "效果图",
          "originalName": "000.rdf 拷贝.jpg",
          "index": 1,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-002.webp",
          "section": "效果图",
          "originalName": "0000.rdf 拷贝.jpg",
          "index": 2,
          "w": 1600,
          "h": 1280
        }
      ],
      "facadeAnalysis": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/analysis.webp",
      "images": [
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-001.webp",
          "section": "效果图",
          "originalName": "000.rdf 拷贝.jpg",
          "index": 1,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-002.webp",
          "section": "效果图",
          "originalName": "0000.rdf 拷贝.jpg",
          "index": 2,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-003.webp",
          "section": "效果图",
          "originalName": "休闲大厅圆形休息卡座.rdf 拷贝.jpg",
          "index": 3,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-004.webp",
          "section": "效果图",
          "originalName": "休闲大厅楼梯上.rdf 拷贝.jpg",
          "index": 4,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-005.webp",
          "section": "效果图",
          "originalName": "休闲大厅榻榻米.rdf 拷贝.jpg",
          "index": 5,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-006.webp",
          "section": "效果图",
          "originalName": "休闲大厅烟吧方向.rdf 拷贝.jpg",
          "index": 6,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-007.webp",
          "section": "效果图",
          "originalName": "前台001.rdf 拷贝.jpg",
          "index": 7,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-008.webp",
          "section": "效果图",
          "originalName": "前台.rdf 拷贝.jpg",
          "index": 8,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-009.webp",
          "section": "效果图",
          "originalName": "功能房.rdf 拷贝.jpg",
          "index": 9,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-010.webp",
          "section": "效果图",
          "originalName": "卫生间手盆.rdf 拷贝.jpg",
          "index": 10,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-011.webp",
          "section": "效果图",
          "originalName": "卫生间男外门.rdf 拷贝.jpg",
          "index": 11,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-012.webp",
          "section": "效果图",
          "originalName": "台球01.rdf 拷贝.jpg",
          "index": 12,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-013.webp",
          "section": "效果图",
          "originalName": "台球02.rdf 拷贝.jpg",
          "index": 13,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-014.webp",
          "section": "效果图",
          "originalName": "抓娃娃机001.rdf 拷贝.jpg",
          "index": 14,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-015.webp",
          "section": "效果图",
          "originalName": "抓娃娃机002.rdf 拷贝.jpg",
          "index": 15,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-016.webp",
          "section": "效果图",
          "originalName": "抓娃娃机003.rdf 拷贝.jpg",
          "index": 16,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-017.webp",
          "section": "效果图",
          "originalName": "抓娃娃机.rdf 拷贝.jpg",
          "index": 17,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-018.webp",
          "section": "效果图",
          "originalName": "格子屋反.rdf 拷贝.jpg",
          "index": 18,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-019.webp",
          "section": "效果图",
          "originalName": "格子屋正.rdf 拷贝.jpg",
          "index": 19,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-020.webp",
          "section": "效果图",
          "originalName": "烟吧01.rdf 拷贝.jpg",
          "index": 20,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-021.webp",
          "section": "效果图",
          "originalName": "烟吧03.rdf 拷贝.jpg",
          "index": 21,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-022.webp",
          "section": "效果图",
          "originalName": "睡眠舱001.rdf 拷贝.jpg",
          "index": 22,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-023.webp",
          "section": "效果图",
          "originalName": "01.jpg",
          "index": 23,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-024.webp",
          "section": "效果图",
          "originalName": "02.jpg",
          "index": 24,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-025.webp",
          "section": "效果图",
          "originalName": "03.jpg",
          "index": 25,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-026.webp",
          "section": "效果图",
          "originalName": "04.jpg",
          "index": 26,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-027.webp",
          "section": "效果图",
          "originalName": "05.jpg",
          "index": 27,
          "w": 1600,
          "h": 1350
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-028.webp",
          "section": "效果图",
          "originalName": "06.jpg",
          "index": 28,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-029.webp",
          "section": "效果图",
          "originalName": "07.jpg",
          "index": 29,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-030.webp",
          "section": "效果图",
          "originalName": "08.jpg",
          "index": 30,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-031.webp",
          "section": "效果图",
          "originalName": "09.jpg",
          "index": 31,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-032.webp",
          "section": "效果图",
          "originalName": "Camera001.jpg",
          "index": 32,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-033.webp",
          "section": "效果图",
          "originalName": "01.jpg",
          "index": 33,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-034.webp",
          "section": "效果图",
          "originalName": "02.jpg",
          "index": 34,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-035.webp",
          "section": "效果图",
          "originalName": "03.jpg",
          "index": 35,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-036.webp",
          "section": "效果图",
          "originalName": "04.jpg",
          "index": 36,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-037.webp",
          "section": "效果图",
          "originalName": "05.jpg",
          "index": 37,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-038.webp",
          "section": "效果图",
          "originalName": "06.jpg",
          "index": 38,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-039.webp",
          "section": "效果图",
          "originalName": "07.jpg",
          "index": 39,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-040.webp",
          "section": "效果图",
          "originalName": "08.jpg",
          "index": 40,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-041.webp",
          "section": "效果图",
          "originalName": "09.jpg",
          "index": 41,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-042.webp",
          "section": "效果图",
          "originalName": "10.jpg",
          "index": 42,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-043.webp",
          "section": "效果图",
          "originalName": "11.jpg",
          "index": 43,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-044.webp",
          "section": "效果图",
          "originalName": "12.jpg",
          "index": 44,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-045.webp",
          "section": "效果图",
          "originalName": "13.jpg",
          "index": 45,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-046.webp",
          "section": "效果图",
          "originalName": "14.jpg",
          "index": 46,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-047.webp",
          "section": "效果图",
          "originalName": "15.jpg",
          "index": 47,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-048.webp",
          "section": "效果图",
          "originalName": "16.jpg",
          "index": 48,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-049.webp",
          "section": "效果图",
          "originalName": "17.jpg",
          "index": 49,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-050.webp",
          "section": "效果图",
          "originalName": "18.jpg",
          "index": 50,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-051.webp",
          "section": "效果图",
          "originalName": "19.jpg",
          "index": 51,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-052.webp",
          "section": "效果图",
          "originalName": "20.jpg",
          "index": 52,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-053.webp",
          "section": "效果图",
          "originalName": "21.jpg",
          "index": 53,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-054.webp",
          "section": "效果图",
          "originalName": "22.jpg",
          "index": 54,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-055.webp",
          "section": "效果图",
          "originalName": "23.jpg",
          "index": 55,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-056.webp",
          "section": "效果图",
          "originalName": "24.jpg",
          "index": 56,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-057.webp",
          "section": "效果图",
          "originalName": "01.jpg",
          "index": 57,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-058.webp",
          "section": "效果图",
          "originalName": "02.jpg",
          "index": 58,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-059.webp",
          "section": "效果图",
          "originalName": "03.jpg",
          "index": 59,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-060.webp",
          "section": "效果图",
          "originalName": "04.jpg",
          "index": 60,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-061.webp",
          "section": "效果图",
          "originalName": "05.jpg",
          "index": 61,
          "w": 1600,
          "h": 1350
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-062.webp",
          "section": "效果图",
          "originalName": "06.jpg",
          "index": 62,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-063.webp",
          "section": "效果图",
          "originalName": "07.jpg",
          "index": 63,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-064.webp",
          "section": "效果图",
          "originalName": "08.jpg",
          "index": 64,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-065.webp",
          "section": "效果图",
          "originalName": "09.jpg",
          "index": 65,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-066.webp",
          "section": "效果图",
          "originalName": "01.jpg",
          "index": 66,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-067.webp",
          "section": "效果图",
          "originalName": "02.jpg",
          "index": 67,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-068.webp",
          "section": "效果图",
          "originalName": "03.jpg",
          "index": 68,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-069.webp",
          "section": "效果图",
          "originalName": "04.jpg",
          "index": 69,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-070.webp",
          "section": "效果图",
          "originalName": "05.jpg",
          "index": 70,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-071.webp",
          "section": "效果图",
          "originalName": "06.jpg",
          "index": 71,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-072.webp",
          "section": "效果图",
          "originalName": "07.jpg",
          "index": 72,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-073.webp",
          "section": "效果图",
          "originalName": "08.jpg",
          "index": 73,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-074.webp",
          "section": "效果图",
          "originalName": "09.jpg",
          "index": 74,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-075.webp",
          "section": "效果图",
          "originalName": "10.jpg",
          "index": 75,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-076.webp",
          "section": "效果图",
          "originalName": "11.jpg",
          "index": 76,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-077.webp",
          "section": "效果图",
          "originalName": "12.jpg",
          "index": 77,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-078.webp",
          "section": "效果图",
          "originalName": "13.jpg",
          "index": 78,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-079.webp",
          "section": "效果图",
          "originalName": "14.jpg",
          "index": 79,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-080.webp",
          "section": "效果图",
          "originalName": "15.jpg",
          "index": 80,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-081.webp",
          "section": "效果图",
          "originalName": "16.jpg",
          "index": 81,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-082.webp",
          "section": "效果图",
          "originalName": "17.jpg",
          "index": 82,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-083.webp",
          "section": "效果图",
          "originalName": "18.jpg",
          "index": 83,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-084.webp",
          "section": "效果图",
          "originalName": "19.jpg",
          "index": 84,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-085.webp",
          "section": "效果图",
          "originalName": "20.jpg",
          "index": 85,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-086.webp",
          "section": "效果图",
          "originalName": "21.jpg",
          "index": 86,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-087.webp",
          "section": "效果图",
          "originalName": "22.jpg",
          "index": 87,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-088.webp",
          "section": "效果图",
          "originalName": "23.jpg",
          "index": 88,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-089.webp",
          "section": "效果图",
          "originalName": "24.jpg",
          "index": 89,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-090.webp",
          "section": "效果图",
          "originalName": "01室外01.rdf 拷贝.jpg",
          "index": 90,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-091.webp",
          "section": "效果图",
          "originalName": "04.jpg",
          "index": 91,
          "w": 1600,
          "h": 1216
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-092.webp",
          "section": "效果图",
          "originalName": "PhysCamera001.rdf 拷贝.jpg",
          "index": 92,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-093.webp",
          "section": "效果图",
          "originalName": "PhysCamera002.rdf 拷贝.jpg",
          "index": 93,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-094.webp",
          "section": "效果图",
          "originalName": "PhysCamera003.rdf 拷贝.jpg",
          "index": 94,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-095.webp",
          "section": "效果图",
          "originalName": "01.jpg",
          "index": 95,
          "w": 1600,
          "h": 1372
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-096.webp",
          "section": "效果图",
          "originalName": "02.jpg",
          "index": 96,
          "w": 1600,
          "h": 1341
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-097.webp",
          "section": "效果图",
          "originalName": "03.jpg",
          "index": 97,
          "w": 1600,
          "h": 1485
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-098.webp",
          "section": "效果图",
          "originalName": "04.jpg",
          "index": 98,
          "w": 1600,
          "h": 1216
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-099.webp",
          "section": "效果图",
          "originalName": "05.jpg",
          "index": 99,
          "w": 1600,
          "h": 1224
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-100.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "01.jpg",
          "index": 100,
          "w": 1600,
          "h": 1139
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-101.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "02.jpg",
          "index": 101,
          "w": 1600,
          "h": 1062
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-102.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "03.jpg",
          "index": 102,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-103.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "05.jpg",
          "index": 103,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-104.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "06.jpg",
          "index": 104,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-105.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "07.jpg",
          "index": 105,
          "w": 1600,
          "h": 1293
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-106.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "08.jpg",
          "index": 106,
          "w": 1600,
          "h": 1431
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-107.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "09.jpg",
          "index": 107,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-108.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "10.jpg",
          "index": 108,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-109.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "11.jpg",
          "index": 109,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-110.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "12.jpg",
          "index": 110,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-111.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "13.jpg",
          "index": 111,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-112.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "14.jpg",
          "index": 112,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-113.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "15.jpg",
          "index": 113,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-114.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "16.jpg",
          "index": 114,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-115.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "17.jpg",
          "index": 115,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-116.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "18.jpg",
          "index": 116,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-117.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "19.jpg",
          "index": 117,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-118.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "20.jpg",
          "index": 118,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-119.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "21.jpg",
          "index": 119,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-120.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "22.jpg",
          "index": 120,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-121.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "23.jpg",
          "index": 121,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-122.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "24.jpg",
          "index": 122,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-123.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "25.jpg",
          "index": 123,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-124.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "26.jpg",
          "index": 124,
          "w": 1600,
          "h": 1539
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-125.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "27.jpg",
          "index": 125,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-126.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "28.jpg",
          "index": 126,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-127.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "01.jpg",
          "index": 127,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-128.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "02.jpg",
          "index": 128,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-129.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "03.jpg",
          "index": 129,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-130.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "04.jpg",
          "index": 130,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-131.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "05.jpg",
          "index": 131,
          "w": 1600,
          "h": 1350
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-132.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "06.jpg",
          "index": 132,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-133.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "07.jpg",
          "index": 133,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-134.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "08.jpg",
          "index": 134,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-135.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "09.jpg",
          "index": 135,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-136.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "01.jpg",
          "index": 136,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-137.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "02.jpg",
          "index": 137,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-138.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "03.jpg",
          "index": 138,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-139.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "04.jpg",
          "index": 139,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-140.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "05.jpg",
          "index": 140,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-141.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "06.jpg",
          "index": 141,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-142.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "07.jpg",
          "index": 142,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-143.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "08.jpg",
          "index": 143,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-144.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "09.jpg",
          "index": 144,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-145.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "10.jpg",
          "index": 145,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-146.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "11.jpg",
          "index": 146,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-147.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "12.jpg",
          "index": 147,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-148.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "13.jpg",
          "index": 148,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-149.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "14.jpg",
          "index": 149,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-150.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "15.jpg",
          "index": 150,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-151.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "16.jpg",
          "index": 151,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-152.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "17.jpg",
          "index": 152,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-153.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "18.jpg",
          "index": 153,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-154.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "19.jpg",
          "index": 154,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-155.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "20.jpg",
          "index": 155,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-156.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "21.jpg",
          "index": 156,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-157.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "22.jpg",
          "index": 157,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-158.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "23.jpg",
          "index": 158,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-159.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "24.jpg",
          "index": 159,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-160.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "01.jpg",
          "index": 160,
          "w": 1600,
          "h": 989
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-161.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "02.jpg",
          "index": 161,
          "w": 1600,
          "h": 1169
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-162.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "03.jpg",
          "index": 162,
          "w": 1600,
          "h": 1179
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-163.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "04.jpg",
          "index": 163,
          "w": 1600,
          "h": 1179
        },
        {
          "src": "/static/case-assets/洗浴-全天初见足疗洗浴-芜湖/image-164.webp",
          "section": "芜湖南陵足疗洗浴方案效果图（门头、泡池、三楼）",
          "originalName": "05.jpg",
          "index": 164,
          "w": 1600,
          "h": 1363
        }
      ]
    },
    {
      "slug": "洗浴-安小溪汤泉-合肥",
      "name": "安小溪汤泉·合肥",
      "category": "洗浴",
      "subtitle": "围绕水疗、休憩和服务动线展开",
      "intro": "以水疗动线、光线层次和材料触感建立休闲场景。",
      "imageCount": 56,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-001.webp",
        "w": 1600,
        "h": 1067
      },
      "previewImages": [
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-001.webp",
          "section": "合肥效果图整理",
          "originalName": "spa.jpg",
          "index": 1,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-002.webp",
          "section": "合肥效果图整理",
          "originalName": "1.jpg",
          "index": 2,
          "w": 1600,
          "h": 753
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-001.webp",
          "section": "合肥效果图整理",
          "originalName": "spa.jpg",
          "index": 1,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-002.webp",
          "section": "合肥效果图整理",
          "originalName": "1.jpg",
          "index": 2,
          "w": 1600,
          "h": 753
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-003.webp",
          "section": "合肥效果图整理",
          "originalName": "2.jpg",
          "index": 3,
          "w": 1600,
          "h": 932
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-004.webp",
          "section": "合肥效果图整理",
          "originalName": "3.jpg",
          "index": 4,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-005.webp",
          "section": "合肥效果图整理",
          "originalName": "4.jpg",
          "index": 5,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-006.webp",
          "section": "合肥效果图整理",
          "originalName": "5.jpg",
          "index": 6,
          "w": 1600,
          "h": 847
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-007.webp",
          "section": "合肥效果图整理",
          "originalName": "6.jpg",
          "index": 7,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-008.webp",
          "section": "合肥效果图整理",
          "originalName": "7.jpg",
          "index": 8,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-009.webp",
          "section": "合肥效果图整理",
          "originalName": "8.jpg",
          "index": 9,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-010.webp",
          "section": "合肥效果图整理",
          "originalName": "9.jpg",
          "index": 10,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-011.webp",
          "section": "合肥效果图整理",
          "originalName": "10.jpg",
          "index": 11,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-012.webp",
          "section": "合肥效果图整理",
          "originalName": "11.jpg",
          "index": 12,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-013.webp",
          "section": "合肥效果图整理",
          "originalName": "12.jpg",
          "index": 13,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-014.webp",
          "section": "合肥效果图整理",
          "originalName": "楼梯.jpg",
          "index": 14,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-015.webp",
          "section": "合肥效果图整理",
          "originalName": "1.jpg",
          "index": 15,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-016.webp",
          "section": "合肥效果图整理",
          "originalName": "2.jpg",
          "index": 16,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-017.webp",
          "section": "合肥效果图整理",
          "originalName": "3.jpg",
          "index": 17,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-018.webp",
          "section": "合肥效果图整理",
          "originalName": "4.jpg",
          "index": 18,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-019.webp",
          "section": "合肥效果图整理",
          "originalName": "5.jpg",
          "index": 19,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-020.webp",
          "section": "合肥效果图整理",
          "originalName": "6.jpg",
          "index": 20,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-021.webp",
          "section": "合肥效果图整理",
          "originalName": "7.jpg",
          "index": 21,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-022.webp",
          "section": "合肥效果图整理",
          "originalName": "8.jpg",
          "index": 22,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-023.webp",
          "section": "合肥效果图整理",
          "originalName": "二更2.jpg",
          "index": 23,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-024.webp",
          "section": "合肥效果图整理",
          "originalName": "更衣3.jpg",
          "index": 24,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-025.webp",
          "section": "合肥效果图整理",
          "originalName": "更衣.jpg",
          "index": 25,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-026.webp",
          "section": "合肥效果图整理",
          "originalName": "泡池2.jpg",
          "index": 26,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-027.webp",
          "section": "合肥效果图整理",
          "originalName": "泡池4.jpg",
          "index": 27,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-028.webp",
          "section": "合肥效果图整理",
          "originalName": "泡池.jpg",
          "index": 28,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-029.webp",
          "section": "合肥效果图整理",
          "originalName": "淋浴2.jpg",
          "index": 29,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-030.webp",
          "section": "合肥效果图整理",
          "originalName": "1.jpg",
          "index": 30,
          "w": 1600,
          "h": 1068
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-031.webp",
          "section": "合肥效果图整理",
          "originalName": "3.jpg",
          "index": 31,
          "w": 1600,
          "h": 1068
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-032.webp",
          "section": "合肥效果图整理",
          "originalName": "4.jpg",
          "index": 32,
          "w": 1600,
          "h": 1068
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-033.webp",
          "section": "合肥效果图整理",
          "originalName": "555.jpg",
          "index": 33,
          "w": 1600,
          "h": 1068
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-034.webp",
          "section": "合肥效果图整理",
          "originalName": "1.jpg",
          "index": 34,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-035.webp",
          "section": "合肥效果图整理",
          "originalName": "4.jpg",
          "index": 35,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-036.webp",
          "section": "合肥效果图整理",
          "originalName": "5.jpg",
          "index": 36,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-037.webp",
          "section": "合肥效果图整理",
          "originalName": "10.jpg",
          "index": 37,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-038.webp",
          "section": "合肥效果图整理",
          "originalName": "ST-二更1.jpg",
          "index": 38,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-039.webp",
          "section": "合肥效果图整理",
          "originalName": "ST-二更2.jpg",
          "index": 39,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-040.webp",
          "section": "合肥效果图整理",
          "originalName": "ST-助浴4.jpg",
          "index": 40,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-041.webp",
          "section": "合肥效果图整理",
          "originalName": "ST-泡池5.jpg",
          "index": 41,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-042.webp",
          "section": "合肥效果图整理",
          "originalName": "ST-淋浴1.jpg",
          "index": 42,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-043.webp",
          "section": "合肥效果图整理",
          "originalName": "助浴2.jpg",
          "index": 43,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-044.webp",
          "section": "合肥效果图整理",
          "originalName": "更衣区.jpg",
          "index": 44,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-045.webp",
          "section": "合肥效果图整理",
          "originalName": "更衣走廊.jpg",
          "index": 45,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-046.webp",
          "section": "合肥效果图整理",
          "originalName": "泡池2.jpg",
          "index": 46,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-047.webp",
          "section": "合肥效果图整理",
          "originalName": "泡池4.jpg",
          "index": 47,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-048.webp",
          "section": "合肥效果图整理",
          "originalName": "泡池6.jpg",
          "index": 48,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-049.webp",
          "section": "合肥效果图整理",
          "originalName": "泡池8.jpg",
          "index": 49,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-050.webp",
          "section": "合肥效果图整理",
          "originalName": "泡池.jpg",
          "index": 50,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-051.webp",
          "section": "合肥效果图整理",
          "originalName": "1.jpg",
          "index": 51,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-052.webp",
          "section": "合肥效果图整理",
          "originalName": "2.jpg",
          "index": 52,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-053.webp",
          "section": "合肥效果图整理",
          "originalName": "3.jpg",
          "index": 53,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-054.webp",
          "section": "合肥效果图整理",
          "originalName": "4.jpg",
          "index": 54,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-055.webp",
          "section": "合肥效果图整理",
          "originalName": "1.jpg",
          "index": 55,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-安小溪汤泉-合肥/image-056.webp",
          "section": "合肥效果图整理",
          "originalName": "2.jpg",
          "index": 56,
          "w": 1600,
          "h": 1600
        }
      ]
    },
    {
      "slug": "洗浴-悦榕汇温泉酒店-哈尔滨",
      "name": "悦榕汇温泉酒店·哈尔滨",
      "category": "洗浴",
      "subtitle": "围绕水疗、休憩和服务动线展开",
      "intro": "以水疗动线、光线层次和材料触感建立休闲场景。",
      "imageCount": 102,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-001.webp",
        "w": 1500,
        "h": 1676
      },
      "previewImages": [
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-001.webp",
          "section": "1.大堂",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1500,
          "h": 1676
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-002.webp",
          "section": "1.大堂",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1500,
          "h": 1532
        }
      ],
      "facadeAnalysis": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/analysis.webp",
      "images": [
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-001.webp",
          "section": "1.大堂",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1500,
          "h": 1676
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-002.webp",
          "section": "1.大堂",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1500,
          "h": 1532
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-003.webp",
          "section": "1.大堂",
          "originalName": "03.jpg",
          "index": 3,
          "w": 1500,
          "h": 1608
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-004.webp",
          "section": "1.大堂",
          "originalName": "04.jpg",
          "index": 4,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-005.webp",
          "section": "1.大堂",
          "originalName": "05.jpg",
          "index": 5,
          "w": 1500,
          "h": 1781
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-006.webp",
          "section": "1.大堂",
          "originalName": "06.jpg",
          "index": 6,
          "w": 1500,
          "h": 1628
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-007.webp",
          "section": "1.大堂",
          "originalName": "07.jpg",
          "index": 7,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-008.webp",
          "section": "1.大堂",
          "originalName": "08.jpg",
          "index": 8,
          "w": 1500,
          "h": 1724
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-009.webp",
          "section": "1.大堂",
          "originalName": "09.jpg",
          "index": 9,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-010.webp",
          "section": "1.大堂",
          "originalName": "10.jpg",
          "index": 10,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-011.webp",
          "section": "1.大堂",
          "originalName": "11.jpg",
          "index": 11,
          "w": 1500,
          "h": 1724
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-012.webp",
          "section": "1.大堂",
          "originalName": "12.jpg",
          "index": 12,
          "w": 1500,
          "h": 1704
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-013.webp",
          "section": "1.大堂",
          "originalName": "14.jpg",
          "index": 13,
          "w": 1500,
          "h": 1888
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-014.webp",
          "section": "1.大堂",
          "originalName": "15.jpg",
          "index": 14,
          "w": 1347,
          "h": 1932
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-015.webp",
          "section": "1.大堂",
          "originalName": "16.jpg",
          "index": 15,
          "w": 1600,
          "h": 961
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-016.webp",
          "section": "1.大堂",
          "originalName": "17.jpg",
          "index": 16,
          "w": 1600,
          "h": 1009
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-017.webp",
          "section": "1.大堂",
          "originalName": "18.jpg",
          "index": 17,
          "w": 1600,
          "h": 2285
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-018.webp",
          "section": "1.大堂",
          "originalName": "19.jpg",
          "index": 18,
          "w": 1600,
          "h": 1180
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-019.webp",
          "section": "1.大堂",
          "originalName": "20.jpg",
          "index": 19,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-020.webp",
          "section": "1.大堂",
          "originalName": "21.jpg",
          "index": 20,
          "w": 1500,
          "h": 531
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-021.webp",
          "section": "1.大堂",
          "originalName": "22.jpg",
          "index": 21,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-022.webp",
          "section": "2.1号房",
          "originalName": "01.jpg",
          "index": 22,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-023.webp",
          "section": "2.1号房",
          "originalName": "02.jpg",
          "index": 23,
          "w": 1542,
          "h": 1143
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-024.webp",
          "section": "2.1号房",
          "originalName": "03.jpg",
          "index": 24,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-025.webp",
          "section": "2.1号房",
          "originalName": "04.jpg",
          "index": 25,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-026.webp",
          "section": "2.1号房",
          "originalName": "05.jpg",
          "index": 26,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-027.webp",
          "section": "2.1号房",
          "originalName": "06.jpg",
          "index": 27,
          "w": 1358,
          "h": 1500
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-028.webp",
          "section": "2.1号房",
          "originalName": "07.jpg",
          "index": 28,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-029.webp",
          "section": "2.1号房",
          "originalName": "08.jpg",
          "index": 29,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-030.webp",
          "section": "2.1号房",
          "originalName": "09.jpg",
          "index": 30,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-031.webp",
          "section": "2.1号房",
          "originalName": "10.jpg",
          "index": 31,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-032.webp",
          "section": "2.1号房",
          "originalName": "11.jpg",
          "index": 32,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-033.webp",
          "section": "2.1号房",
          "originalName": "12.jpg",
          "index": 33,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-034.webp",
          "section": "2.1号房",
          "originalName": "13.jpg",
          "index": 34,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-035.webp",
          "section": "9.8号房",
          "originalName": "01.jpg",
          "index": 35,
          "w": 1600,
          "h": 1268
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-036.webp",
          "section": "9.8号房",
          "originalName": "02.jpg",
          "index": 36,
          "w": 1600,
          "h": 1233
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-037.webp",
          "section": "9.8号房",
          "originalName": "03.jpg",
          "index": 37,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-038.webp",
          "section": "9.8号房",
          "originalName": "04.jpg",
          "index": 38,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-039.webp",
          "section": "9.8号房",
          "originalName": "05.jpg",
          "index": 39,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-040.webp",
          "section": "9.8号房",
          "originalName": "06.jpg",
          "index": 40,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-041.webp",
          "section": "9.8号房",
          "originalName": "07.jpg",
          "index": 41,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-042.webp",
          "section": "9.8号房",
          "originalName": "08.jpg",
          "index": 42,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-043.webp",
          "section": "9.8号房",
          "originalName": "09.jpg",
          "index": 43,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-044.webp",
          "section": "9.8号房",
          "originalName": "10.jpg",
          "index": 44,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-045.webp",
          "section": "9.8号房",
          "originalName": "11.jpg",
          "index": 45,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-046.webp",
          "section": "9.8号房",
          "originalName": "12.jpg",
          "index": 46,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-047.webp",
          "section": "9.8号房",
          "originalName": "13.jpg",
          "index": 47,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-048.webp",
          "section": "9.8号房",
          "originalName": "14.jpg",
          "index": 48,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-049.webp",
          "section": "9.8号房",
          "originalName": "15.jpg",
          "index": 49,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-050.webp",
          "section": "9.8号房",
          "originalName": "16.jpg",
          "index": 50,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-051.webp",
          "section": "10.9号房",
          "originalName": "01.jpg",
          "index": 51,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-052.webp",
          "section": "10.9号房",
          "originalName": "02.jpg",
          "index": 52,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-053.webp",
          "section": "10.9号房",
          "originalName": "03.jpg",
          "index": 53,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-054.webp",
          "section": "10.9号房",
          "originalName": "04.jpg",
          "index": 54,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-055.webp",
          "section": "10.9号房",
          "originalName": "05.jpg",
          "index": 55,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-056.webp",
          "section": "10.9号房",
          "originalName": "06.jpg",
          "index": 56,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-057.webp",
          "section": "10.9号房",
          "originalName": "07.jpg",
          "index": 57,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-058.webp",
          "section": "10.9号房",
          "originalName": "08.jpg",
          "index": 58,
          "w": 1600,
          "h": 1630
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-059.webp",
          "section": "10.9号房",
          "originalName": "09.jpg",
          "index": 59,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-060.webp",
          "section": "10.9号房",
          "originalName": "10.jpg",
          "index": 60,
          "w": 1600,
          "h": 1490
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-061.webp",
          "section": "10.9号房",
          "originalName": "11.jpg",
          "index": 61,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-062.webp",
          "section": "10.9号房",
          "originalName": "12.jpg",
          "index": 62,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-063.webp",
          "section": "10.9号房",
          "originalName": "13.jpg",
          "index": 63,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-064.webp",
          "section": "10.9号房",
          "originalName": "14.jpg",
          "index": 64,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-065.webp",
          "section": "10.9号房",
          "originalName": "15.jpg",
          "index": 65,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-066.webp",
          "section": "10.9号房",
          "originalName": "16.jpg",
          "index": 66,
          "w": 1600,
          "h": 1684
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-067.webp",
          "section": "11.10号房",
          "originalName": "01.jpg",
          "index": 67,
          "w": 1500,
          "h": 1238
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-068.webp",
          "section": "11.10号房",
          "originalName": "02.jpg",
          "index": 68,
          "w": 1500,
          "h": 1648
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-069.webp",
          "section": "11.10号房",
          "originalName": "03.jpg",
          "index": 69,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-070.webp",
          "section": "11.10号房",
          "originalName": "04.jpg",
          "index": 70,
          "w": 1500,
          "h": 1140
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-071.webp",
          "section": "11.10号房",
          "originalName": "05.jpg",
          "index": 71,
          "w": 1500,
          "h": 1706
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-072.webp",
          "section": "11.10号房",
          "originalName": "06.jpg",
          "index": 72,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-073.webp",
          "section": "11.10号房",
          "originalName": "07.jpg",
          "index": 73,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-074.webp",
          "section": "11.10号房",
          "originalName": "08.jpg",
          "index": 74,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-075.webp",
          "section": "11.10号房",
          "originalName": "09.jpg",
          "index": 75,
          "w": 1500,
          "h": 1472
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-076.webp",
          "section": "11.10号房",
          "originalName": "10.jpg",
          "index": 76,
          "w": 1500,
          "h": 1692
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-077.webp",
          "section": "11.10号房",
          "originalName": "11.jpg",
          "index": 77,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-078.webp",
          "section": "11.10号房",
          "originalName": "12.jpg",
          "index": 78,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-079.webp",
          "section": "11.10号房",
          "originalName": "13.jpg",
          "index": 79,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-080.webp",
          "section": "11.10号房",
          "originalName": "14.jpg",
          "index": 80,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-081.webp",
          "section": "11.10号房",
          "originalName": "15.jpg",
          "index": 81,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-082.webp",
          "section": "11.10号房",
          "originalName": "16.jpg",
          "index": 82,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-083.webp",
          "section": "11.10号房",
          "originalName": "17.jpg",
          "index": 83,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-084.webp",
          "section": "11.10号房",
          "originalName": "18.jpg",
          "index": 84,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-085.webp",
          "section": "11.10号房",
          "originalName": "19.jpg",
          "index": 85,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-086.webp",
          "section": "11.10号房",
          "originalName": "20.jpg",
          "index": 86,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-087.webp",
          "section": "11.10号房",
          "originalName": "21.jpg",
          "index": 87,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-088.webp",
          "section": "11.10号房",
          "originalName": "22.jpg",
          "index": 88,
          "w": 1500,
          "h": 2000
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-089.webp",
          "section": "11.10号房",
          "originalName": "23.jpg",
          "index": 89,
          "w": 1500,
          "h": 1604
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-090.webp",
          "section": "11.10号房",
          "originalName": "24.jpg",
          "index": 90,
          "w": 1600,
          "h": 1468
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-091.webp",
          "section": "12.建筑外立面",
          "originalName": "01.jpg",
          "index": 91,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-092.webp",
          "section": "12.建筑外立面",
          "originalName": "02.jpg",
          "index": 92,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-093.webp",
          "section": "12.建筑外立面",
          "originalName": "03.jpg",
          "index": 93,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-094.webp",
          "section": "12.建筑外立面",
          "originalName": "04.jpg",
          "index": 94,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-095.webp",
          "section": "12.建筑外立面",
          "originalName": "05.jpg",
          "index": 95,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-096.webp",
          "section": "12.建筑外立面",
          "originalName": "06.jpg",
          "index": 96,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-097.webp",
          "section": "12.建筑外立面",
          "originalName": "07.jpg",
          "index": 97,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-098.webp",
          "section": "12.建筑外立面",
          "originalName": "08.jpg",
          "index": 98,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-099.webp",
          "section": "13.包间",
          "originalName": "微信图片_20240904185146.jpg",
          "index": 99,
          "w": 1600,
          "h": 1009
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-100.webp",
          "section": "13.包间",
          "originalName": "微信图片_20240904185149.jpg",
          "index": 100,
          "w": 1600,
          "h": 1180
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-101.webp",
          "section": "13.包间",
          "originalName": "微信图片_20240904185152.jpg",
          "index": 101,
          "w": 1600,
          "h": 2285
        },
        {
          "src": "/static/case-assets/洗浴-悦榕汇温泉酒店-哈尔滨/image-102.webp",
          "section": "13.包间",
          "originalName": "微信图片_20240904185154.jpg",
          "index": 102,
          "w": 1600,
          "h": 961
        }
      ]
    },
    {
      "slug": "洗浴-明月泉-沈阳",
      "name": "明月泉·沈阳",
      "category": "洗浴",
      "subtitle": "围绕水疗、休憩和服务动线展开",
      "intro": "以水疗动线、光线层次和材料触感建立休闲场景。",
      "imageCount": 33,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/洗浴-明月泉-沈阳/image-001.webp",
        "w": 1600,
        "h": 1600
      },
      "previewImages": [
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 1600
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-003.webp",
          "section": "",
          "originalName": "1 (3).jpg",
          "index": 3,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-004.webp",
          "section": "",
          "originalName": "1 (4).jpg",
          "index": 4,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-005.webp",
          "section": "",
          "originalName": "2 (1).jpg",
          "index": 5,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-006.webp",
          "section": "",
          "originalName": "2 (2).jpg",
          "index": 6,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-007.webp",
          "section": "",
          "originalName": "2 (3).jpg",
          "index": 7,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-008.webp",
          "section": "",
          "originalName": "2 (4).jpg",
          "index": 8,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-009.webp",
          "section": "",
          "originalName": "3 (1).jpg",
          "index": 9,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-010.webp",
          "section": "",
          "originalName": "3 (2).jpg",
          "index": 10,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-011.webp",
          "section": "",
          "originalName": "3 (3).jpg",
          "index": 11,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-012.webp",
          "section": "",
          "originalName": "4 (1).jpg",
          "index": 12,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-013.webp",
          "section": "",
          "originalName": "4 (2).jpg",
          "index": 13,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-014.webp",
          "section": "",
          "originalName": "4 (3).jpg",
          "index": 14,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-015.webp",
          "section": "",
          "originalName": "4 (4).jpg",
          "index": 15,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-016.webp",
          "section": "",
          "originalName": "4 (5).jpg",
          "index": 16,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-017.webp",
          "section": "",
          "originalName": "4 (6).jpg",
          "index": 17,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-018.webp",
          "section": "",
          "originalName": "4 (7).jpg",
          "index": 18,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-019.webp",
          "section": "",
          "originalName": "4 (8).jpg",
          "index": 19,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-020.webp",
          "section": "",
          "originalName": "4 (9).jpg",
          "index": 20,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-021.webp",
          "section": "",
          "originalName": "5 (1).jpg",
          "index": 21,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-022.webp",
          "section": "",
          "originalName": "5 (2).jpg",
          "index": 22,
          "w": 1600,
          "h": 1230
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-023.webp",
          "section": "",
          "originalName": "6 (1).jpg",
          "index": 23,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-024.webp",
          "section": "",
          "originalName": "6 (2).jpg",
          "index": 24,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-025.webp",
          "section": "",
          "originalName": "6 (3).jpg",
          "index": 25,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-026.webp",
          "section": "",
          "originalName": "6 (4).jpg",
          "index": 26,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-027.webp",
          "section": "",
          "originalName": "6 (5).jpg",
          "index": 27,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-028.webp",
          "section": "",
          "originalName": "6 (6).jpg",
          "index": 28,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-029.webp",
          "section": "",
          "originalName": "6 (7).jpg",
          "index": 29,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-030.webp",
          "section": "",
          "originalName": "7 (1).jpg",
          "index": 30,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-031.webp",
          "section": "",
          "originalName": "7 (2).jpg",
          "index": 31,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-032.webp",
          "section": "",
          "originalName": "8 (1).jpg",
          "index": 32,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-明月泉-沈阳/image-033.webp",
          "section": "",
          "originalName": "8 (2).jpg",
          "index": 33,
          "w": 1600,
          "h": 1600
        }
      ]
    },
    {
      "slug": "洗浴-水逸汇洗浴会所-依安",
      "name": "水逸汇洗浴会所·依安",
      "category": "洗浴",
      "subtitle": "围绕水疗、休憩和服务动线展开",
      "intro": "以水疗动线、光线层次和材料触感建立休闲场景。",
      "imageCount": 49,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-001.webp",
        "w": 1600,
        "h": 941
      },
      "previewImages": [
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 941
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 777
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 941
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 777
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-003.webp",
          "section": "",
          "originalName": "2 (1).jpg",
          "index": 3,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-004.webp",
          "section": "",
          "originalName": "2 (2).jpg",
          "index": 4,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-005.webp",
          "section": "",
          "originalName": "2 (3).jpg",
          "index": 5,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-006.webp",
          "section": "",
          "originalName": "2 (4).jpg",
          "index": 6,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-007.webp",
          "section": "",
          "originalName": "2 (5).jpg",
          "index": 7,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-008.webp",
          "section": "",
          "originalName": "2 (6).jpg",
          "index": 8,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-009.webp",
          "section": "",
          "originalName": "3 (1).jpg",
          "index": 9,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-010.webp",
          "section": "",
          "originalName": "3 (2).jpg",
          "index": 10,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-011.webp",
          "section": "",
          "originalName": "3 (3).jpg",
          "index": 11,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-012.webp",
          "section": "",
          "originalName": "3 (4).jpg",
          "index": 12,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-013.webp",
          "section": "",
          "originalName": "3 (5).jpg",
          "index": 13,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-014.webp",
          "section": "",
          "originalName": "4 (1).jpg",
          "index": 14,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-015.webp",
          "section": "",
          "originalName": "4 (2).jpg",
          "index": 15,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-016.webp",
          "section": "",
          "originalName": "4 (3).jpg",
          "index": 16,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-017.webp",
          "section": "",
          "originalName": "5 (1).jpg",
          "index": 17,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-018.webp",
          "section": "",
          "originalName": "5 (2).jpg",
          "index": 18,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-019.webp",
          "section": "",
          "originalName": "6 (1).jpg",
          "index": 19,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-020.webp",
          "section": "",
          "originalName": "6 (2).jpg",
          "index": 20,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-021.webp",
          "section": "",
          "originalName": "7 (1).jpg",
          "index": 21,
          "w": 1600,
          "h": 577
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-022.webp",
          "section": "",
          "originalName": "7 (2).jpg",
          "index": 22,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-023.webp",
          "section": "",
          "originalName": "7 (3).jpg",
          "index": 23,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-024.webp",
          "section": "",
          "originalName": "7 (4).jpg",
          "index": 24,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-025.webp",
          "section": "",
          "originalName": "7 (5).jpg",
          "index": 25,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-026.webp",
          "section": "",
          "originalName": "7 (6).jpg",
          "index": 26,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-027.webp",
          "section": "",
          "originalName": "7 (7).jpg",
          "index": 27,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-028.webp",
          "section": "",
          "originalName": "7 (8).jpg",
          "index": 28,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-029.webp",
          "section": "",
          "originalName": "7 (9).jpg",
          "index": 29,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-030.webp",
          "section": "",
          "originalName": "7 (10).jpg",
          "index": 30,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-031.webp",
          "section": "",
          "originalName": "7 (11).jpg",
          "index": 31,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-032.webp",
          "section": "",
          "originalName": "7 (12).jpg",
          "index": 32,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-033.webp",
          "section": "",
          "originalName": "7 (13).jpg",
          "index": 33,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-034.webp",
          "section": "",
          "originalName": "8 (1).jpg",
          "index": 34,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-035.webp",
          "section": "",
          "originalName": "8 (2).jpg",
          "index": 35,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-036.webp",
          "section": "",
          "originalName": "8 (3).jpg",
          "index": 36,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-037.webp",
          "section": "",
          "originalName": "8 (4).jpg",
          "index": 37,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-038.webp",
          "section": "",
          "originalName": "9 (1).jpg",
          "index": 38,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-039.webp",
          "section": "",
          "originalName": "9 (2).jpg",
          "index": 39,
          "w": 1600,
          "h": 1108
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-040.webp",
          "section": "",
          "originalName": "9 (3).jpg",
          "index": 40,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-041.webp",
          "section": "",
          "originalName": "9 (4).jpg",
          "index": 41,
          "w": 1600,
          "h": 1481
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-042.webp",
          "section": "",
          "originalName": "9 (5).jpg",
          "index": 42,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-043.webp",
          "section": "",
          "originalName": "9 (6).jpg",
          "index": 43,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-044.webp",
          "section": "",
          "originalName": "9 (7).jpg",
          "index": 44,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-045.webp",
          "section": "",
          "originalName": "9 (8).jpg",
          "index": 45,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-046.webp",
          "section": "",
          "originalName": "10 (1).jpg",
          "index": 46,
          "w": 1600,
          "h": 1001
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-047.webp",
          "section": "",
          "originalName": "10 (2).jpg",
          "index": 47,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-048.webp",
          "section": "",
          "originalName": "10 (3).jpg",
          "index": 48,
          "w": 1600,
          "h": 1423
        },
        {
          "src": "/static/case-assets/洗浴-水逸汇洗浴会所-依安/image-049.webp",
          "section": "",
          "originalName": "10 (4).jpg",
          "index": 49,
          "w": 1600,
          "h": 1600
        }
      ]
    },
    {
      "slug": "洗浴-维州路搓背馆-潍坊",
      "name": "维州路搓背馆·潍坊",
      "category": "洗浴",
      "subtitle": "围绕水疗、休憩和服务动线展开",
      "intro": "以水疗动线、光线层次和材料触感建立休闲场景。",
      "imageCount": 29,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-001.webp",
        "w": 1600,
        "h": 1360
      },
      "previewImages": [
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-001.webp",
          "section": "大堂",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1360
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-002.webp",
          "section": "大堂",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1360
        }
      ],
      "facadeAnalysis": "/static/case-assets/洗浴-维州路搓背馆-潍坊/analysis.webp",
      "images": [
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-001.webp",
          "section": "大堂",
          "originalName": "01.jpg",
          "index": 1,
          "w": 1600,
          "h": 1360
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-002.webp",
          "section": "大堂",
          "originalName": "02.jpg",
          "index": 2,
          "w": 1600,
          "h": 1360
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-003.webp",
          "section": "大堂",
          "originalName": "03.jpg",
          "index": 3,
          "w": 1600,
          "h": 1360
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-004.webp",
          "section": "大堂",
          "originalName": "04.jpg",
          "index": 4,
          "w": 1600,
          "h": 1360
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-005.webp",
          "section": "大堂",
          "originalName": "05.jpg",
          "index": 5,
          "w": 1600,
          "h": 1360
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-006.webp",
          "section": "大堂",
          "originalName": "18.jpg",
          "index": 6,
          "w": 1600,
          "h": 1360
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-007.webp",
          "section": "大堂",
          "originalName": "19.jpg",
          "index": 7,
          "w": 1600,
          "h": 1360
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-008.webp",
          "section": "大堂",
          "originalName": "21.jpg",
          "index": 8,
          "w": 1600,
          "h": 1360
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-009.webp",
          "section": "大堂",
          "originalName": "24.jpg",
          "index": 9,
          "w": 1600,
          "h": 1360
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-010.webp",
          "section": "女浴",
          "originalName": "17.jpg",
          "index": 10,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-011.webp",
          "section": "女浴",
          "originalName": "18.jpg",
          "index": 11,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-012.webp",
          "section": "女浴",
          "originalName": "22.jpg",
          "index": 12,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-013.webp",
          "section": "女浴",
          "originalName": "24.jpg",
          "index": 13,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-014.webp",
          "section": "女浴",
          "originalName": "26.jpg",
          "index": 14,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-015.webp",
          "section": "女浴",
          "originalName": "27.jpg",
          "index": 15,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-016.webp",
          "section": "男浴",
          "originalName": "1 拷贝.jpg",
          "index": 16,
          "w": 1600,
          "h": 1351
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-017.webp",
          "section": "男浴",
          "originalName": "2 拷贝.jpg",
          "index": 17,
          "w": 1600,
          "h": 1536
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-018.webp",
          "section": "男浴",
          "originalName": "3 拷贝.jpg",
          "index": 18,
          "w": 1600,
          "h": 1239
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-019.webp",
          "section": "男浴",
          "originalName": "4 拷贝.jpg",
          "index": 19,
          "w": 1600,
          "h": 1490
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-020.webp",
          "section": "男浴",
          "originalName": "5 拷贝.jpg",
          "index": 20,
          "w": 1600,
          "h": 1528
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-021.webp",
          "section": "男浴",
          "originalName": "6 拷贝.jpg",
          "index": 21,
          "w": 1600,
          "h": 1188
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-022.webp",
          "section": "男浴",
          "originalName": "7 拷贝.jpg",
          "index": 22,
          "w": 1600,
          "h": 1303
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-023.webp",
          "section": "男浴",
          "originalName": "9 拷贝.jpg",
          "index": 23,
          "w": 1600,
          "h": 957
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-024.webp",
          "section": "男浴",
          "originalName": "10 拷贝.jpg",
          "index": 24,
          "w": 1600,
          "h": 1285
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-025.webp",
          "section": "男浴",
          "originalName": "11 拷贝.jpg",
          "index": 25,
          "w": 1600,
          "h": 1141
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-026.webp",
          "section": "门头",
          "originalName": "门头 (1).jpg",
          "index": 26,
          "w": 1600,
          "h": 621
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-027.webp",
          "section": "门头",
          "originalName": "门头 (3).jpg",
          "index": 27,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-028.webp",
          "section": "门头",
          "originalName": "门头 (5).jpg",
          "index": 28,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/洗浴-维州路搓背馆-潍坊/image-029.webp",
          "section": "门头",
          "originalName": "门头 (6).jpg",
          "index": 29,
          "w": 1600,
          "h": 1370
        }
      ]
    },
    {
      "slug": "洗浴-鲁搓搓背馆-潍坊",
      "name": "鲁搓搓背馆·潍坊",
      "category": "洗浴",
      "subtitle": "围绕水疗、休憩和服务动线展开",
      "intro": "以水疗动线、光线层次和材料触感建立休闲场景。",
      "imageCount": 80,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-001.webp",
        "w": 1600,
        "h": 1067
      },
      "previewImages": [
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-001.webp",
          "section": "spa",
          "originalName": "spa1.实时灯光混合.jpg",
          "index": 1,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-002.webp",
          "section": "spa",
          "originalName": "spa2.实时灯光混合.jpg",
          "index": 2,
          "w": 1600,
          "h": 1067
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-001.webp",
          "section": "spa",
          "originalName": "spa1.实时灯光混合.jpg",
          "index": 1,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-002.webp",
          "section": "spa",
          "originalName": "spa2.实时灯光混合.jpg",
          "index": 2,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-003.webp",
          "section": "spa",
          "originalName": "SPA3.实时灯光混合.jpg",
          "index": 3,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-004.webp",
          "section": "spa",
          "originalName": "SPA4.实时灯光混合.jpg",
          "index": 4,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-005.webp",
          "section": "spa",
          "originalName": "SPA6.实时灯光混合.jpg",
          "index": 5,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-006.webp",
          "section": "spa",
          "originalName": "电梯厅2.实时灯光混合.jpg",
          "index": 6,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-007.webp",
          "section": "spa",
          "originalName": "电梯厅.实时灯光混合.jpg",
          "index": 7,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-008.webp",
          "section": "spa",
          "originalName": "私汤1.实时灯光混合.jpg",
          "index": 8,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-009.webp",
          "section": "spa",
          "originalName": "私汤2.实时灯光混合.jpg",
          "index": 9,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-010.webp",
          "section": "spa",
          "originalName": "私汤3.实时灯光混合.jpg",
          "index": 10,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-011.webp",
          "section": "spa",
          "originalName": "私汤4.实时灯光混合.jpg",
          "index": 11,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-012.webp",
          "section": "spa",
          "originalName": "私汤5.实时灯光混合.jpg",
          "index": 12,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-013.webp",
          "section": "spa",
          "originalName": "私汤6.实时灯光混合.jpg",
          "index": 13,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-014.webp",
          "section": "spa",
          "originalName": "私汤7.实时灯光混合.jpg",
          "index": 14,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-015.webp",
          "section": "spa",
          "originalName": "私汤8.实时灯光混合.jpg",
          "index": 15,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-016.webp",
          "section": "spa",
          "originalName": "私汤9.实时灯光混合.jpg",
          "index": 16,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-017.webp",
          "section": "spa",
          "originalName": "私汤11.实时灯光混合.jpg",
          "index": 17,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-018.webp",
          "section": "spa",
          "originalName": "走廊2.实时灯光混合.jpg",
          "index": 18,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-019.webp",
          "section": "spa",
          "originalName": "走廊3.实时灯光混合.jpg",
          "index": 19,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-020.webp",
          "section": "spa",
          "originalName": "走廊.实时灯光混合.jpg",
          "index": 20,
          "w": 1600,
          "h": 1067
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-021.webp",
          "section": "大堂",
          "originalName": "1.jpg",
          "index": 21,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-022.webp",
          "section": "大堂",
          "originalName": "2.jpg",
          "index": 22,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-023.webp",
          "section": "大堂",
          "originalName": "3.jpg",
          "index": 23,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-024.webp",
          "section": "大堂",
          "originalName": "4.jpg",
          "index": 24,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-025.webp",
          "section": "大堂",
          "originalName": "5.jpg",
          "index": 25,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-026.webp",
          "section": "大堂",
          "originalName": "6.jpg",
          "index": 26,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-027.webp",
          "section": "大堂",
          "originalName": "7.jpg",
          "index": 27,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-028.webp",
          "section": "大堂",
          "originalName": "8.jpg",
          "index": 28,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-029.webp",
          "section": "大堂",
          "originalName": "9.jpg",
          "index": 29,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-030.webp",
          "section": "大堂",
          "originalName": "10.jpg",
          "index": 30,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-031.webp",
          "section": "大堂",
          "originalName": "11.jpg",
          "index": 31,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-032.webp",
          "section": "大堂",
          "originalName": "12.jpg",
          "index": 32,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-033.webp",
          "section": "大堂",
          "originalName": "13.jpg",
          "index": 33,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-034.webp",
          "section": "大堂",
          "originalName": "14.jpg",
          "index": 34,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-035.webp",
          "section": "大堂",
          "originalName": "15.jpg",
          "index": 35,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-036.webp",
          "section": "大堂",
          "originalName": "16.jpg",
          "index": 36,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-037.webp",
          "section": "大堂",
          "originalName": "17.jpg",
          "index": 37,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-038.webp",
          "section": "大堂",
          "originalName": "18.jpg",
          "index": 38,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-039.webp",
          "section": "大堂",
          "originalName": "19.jpg",
          "index": 39,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-040.webp",
          "section": "大堂",
          "originalName": "20.jpg",
          "index": 40,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-041.webp",
          "section": "大堂",
          "originalName": "21.jpg",
          "index": 41,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-042.webp",
          "section": "大堂",
          "originalName": "22.jpg",
          "index": 42,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-043.webp",
          "section": "大堂",
          "originalName": "23.jpg",
          "index": 43,
          "w": 1600,
          "h": 900
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-044.webp",
          "section": "女浴",
          "originalName": "1 拷贝.jpg",
          "index": 44,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-045.webp",
          "section": "女浴",
          "originalName": "2 拷贝.jpg",
          "index": 45,
          "w": 1600,
          "h": 919
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-046.webp",
          "section": "女浴",
          "originalName": "3 拷贝.jpg",
          "index": 46,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-047.webp",
          "section": "女浴",
          "originalName": "4 拷贝.jpg",
          "index": 47,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-048.webp",
          "section": "女浴",
          "originalName": "5 拷贝.jpg",
          "index": 48,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-049.webp",
          "section": "女浴",
          "originalName": "6 拷贝.jpg",
          "index": 49,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-050.webp",
          "section": "女浴",
          "originalName": "7 拷贝.jpg",
          "index": 50,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-051.webp",
          "section": "女浴",
          "originalName": "8 拷贝.jpg",
          "index": 51,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-052.webp",
          "section": "女浴",
          "originalName": "9 拷贝.jpg",
          "index": 52,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-053.webp",
          "section": "女浴",
          "originalName": "10 拷贝.jpg",
          "index": 53,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-054.webp",
          "section": "女浴",
          "originalName": "11 拷贝.jpg",
          "index": 54,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-055.webp",
          "section": "女浴",
          "originalName": "12 拷贝.jpg",
          "index": 55,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-056.webp",
          "section": "女浴",
          "originalName": "14 拷贝.jpg",
          "index": 56,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-057.webp",
          "section": "女浴",
          "originalName": "15 拷贝.jpg",
          "index": 57,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-058.webp",
          "section": "女浴",
          "originalName": "16 拷贝.jpg",
          "index": 58,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-059.webp",
          "section": "女浴",
          "originalName": "17 拷贝.jpg",
          "index": 59,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-060.webp",
          "section": "女浴",
          "originalName": "18 拷贝.jpg",
          "index": 60,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-061.webp",
          "section": "女浴",
          "originalName": "19 拷贝.jpg",
          "index": 61,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-062.webp",
          "section": "女浴",
          "originalName": "20 拷贝.jpg",
          "index": 62,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-063.webp",
          "section": "女浴",
          "originalName": "PhysCamera007_成图_306206641-00 拷贝.jpg",
          "index": 63,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-064.webp",
          "section": "女浴",
          "originalName": "PhysCamera009_成图_379187169-00 拷贝.jpg",
          "index": 64,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-065.webp",
          "section": "男浴",
          "originalName": "Camera001_成图_387878746-00 拷贝.jpg",
          "index": 65,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-066.webp",
          "section": "男浴",
          "originalName": "Camera002_成图_396525022-00 拷贝.jpg",
          "index": 66,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-067.webp",
          "section": "男浴",
          "originalName": "Camera003_成图_348273776-00 拷贝.jpg",
          "index": 67,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-068.webp",
          "section": "男浴",
          "originalName": "Camera004_成图_309717255-00 拷贝.jpg",
          "index": 68,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-069.webp",
          "section": "男浴",
          "originalName": "Camera005_成图_385471810-00 拷贝.jpg",
          "index": 69,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-070.webp",
          "section": "男浴",
          "originalName": "Camera006_成图_303236396-00 拷贝.jpg",
          "index": 70,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-071.webp",
          "section": "男浴",
          "originalName": "Camera007_成图_388858397-00 拷贝.jpg",
          "index": 71,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-072.webp",
          "section": "男浴",
          "originalName": "Camera008_成图_315423798-00 拷贝.jpg",
          "index": 72,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-073.webp",
          "section": "男浴",
          "originalName": "Camera009_成图_371619083-00 拷贝.jpg",
          "index": 73,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-074.webp",
          "section": "男浴",
          "originalName": "Camera011_成图_385841126-00 拷贝.jpg",
          "index": 74,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-075.webp",
          "section": "男浴",
          "originalName": "Camera012_成图_393569809-00 拷贝.jpg",
          "index": 75,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-076.webp",
          "section": "男浴",
          "originalName": "Camera013_成图_376004952-00 拷贝.jpg",
          "index": 76,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-077.webp",
          "section": "男浴",
          "originalName": "oooooo 拷贝.jpg",
          "index": 77,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-078.webp",
          "section": "男浴",
          "originalName": "PhysCamera001_成图_348158874-00 拷贝.jpg",
          "index": 78,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-079.webp",
          "section": "男浴",
          "originalName": "PhysCamera002_成图_326656751-00 拷贝.jpg",
          "index": 79,
          "w": 1600,
          "h": 1333
        },
        {
          "src": "/static/case-assets/洗浴-鲁搓搓背馆-潍坊/image-080.webp",
          "section": "男浴",
          "originalName": "PhysCamera003_成图_353154612-00 拷贝.jpg",
          "index": 80,
          "w": 1600,
          "h": 1333
        }
      ]
    },
    {
      "slug": "酒店-大连理工大学城市学院酒店",
      "name": "大连理工大学城市学院酒店",
      "category": "酒店",
      "subtitle": "从抵达到停留的酒店空间叙事",
      "intro": "从抵达、等候到休憩，建立酒店空间的秩序。",
      "imageCount": 34,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-001.webp",
        "w": 1600,
        "h": 1280
      },
      "previewImages": [
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-001.webp",
          "section": "大堂",
          "originalName": "05.jpg",
          "index": 1,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-002.webp",
          "section": "大堂",
          "originalName": "06.jpg",
          "index": 2,
          "w": 1600,
          "h": 1200
        }
      ],
      "facadeAnalysis": "/static/case-assets/酒店-大连理工大学城市学院酒店/analysis.webp",
      "images": [
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-001.webp",
          "section": "大堂",
          "originalName": "05.jpg",
          "index": 1,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-002.webp",
          "section": "大堂",
          "originalName": "06.jpg",
          "index": 2,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-003.webp",
          "section": "大堂",
          "originalName": "07.jpg",
          "index": 3,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-004.webp",
          "section": "大堂",
          "originalName": "08.jpg",
          "index": 4,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-005.webp",
          "section": "大堂",
          "originalName": "09.jpg",
          "index": 5,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-006.webp",
          "section": "大堂",
          "originalName": "10.jpg",
          "index": 6,
          "w": 1600,
          "h": 1087
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-007.webp",
          "section": "大堂",
          "originalName": "11.jpg",
          "index": 7,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-008.webp",
          "section": "大堂",
          "originalName": "12.jpg",
          "index": 8,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-009.webp",
          "section": "大堂",
          "originalName": "13.jpg",
          "index": 9,
          "w": 1600,
          "h": 1102
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-010.webp",
          "section": "大堂",
          "originalName": "14.jpg",
          "index": 10,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-011.webp",
          "section": "大堂",
          "originalName": "15(1).jpg",
          "index": 11,
          "w": 1600,
          "h": 1127
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-012.webp",
          "section": "大堂",
          "originalName": "15.jpg",
          "index": 12,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-013.webp",
          "section": "大堂",
          "originalName": "16.jpg",
          "index": 13,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-014.webp",
          "section": "大堂",
          "originalName": "17.jpg",
          "index": 14,
          "w": 1600,
          "h": 1140
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-015.webp",
          "section": "大堂",
          "originalName": "18.jpg",
          "index": 15,
          "w": 1600,
          "h": 1148
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-016.webp",
          "section": "大堂",
          "originalName": "18（1）.jpg",
          "index": 16,
          "w": 1600,
          "h": 1174
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-017.webp",
          "section": "大堂",
          "originalName": "19.jpg",
          "index": 17,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-018.webp",
          "section": "大堂",
          "originalName": "20.jpg",
          "index": 18,
          "w": 1600,
          "h": 842
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-019.webp",
          "section": "大堂",
          "originalName": "21.jpg",
          "index": 19,
          "w": 1600,
          "h": 1094
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-020.webp",
          "section": "大堂",
          "originalName": "22.jpg",
          "index": 20,
          "w": 1600,
          "h": 1215
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-021.webp",
          "section": "大堂",
          "originalName": "23.jpg",
          "index": 21,
          "w": 1600,
          "h": 1208
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-022.webp",
          "section": "大堂",
          "originalName": "24.jpg",
          "index": 22,
          "w": 1600,
          "h": 772
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-023.webp",
          "section": "大堂",
          "originalName": "25.jpg",
          "index": 23,
          "w": 1600,
          "h": 824
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-024.webp",
          "section": "大堂",
          "originalName": "26.jpg",
          "index": 24,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-025.webp",
          "section": "大堂",
          "originalName": "27.jpg",
          "index": 25,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-026.webp",
          "section": "大堂",
          "originalName": "28.jpg",
          "index": 26,
          "w": 1600,
          "h": 1056
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-027.webp",
          "section": "大堂",
          "originalName": "29.jpg",
          "index": 27,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-028.webp",
          "section": "大堂",
          "originalName": "30.jpg",
          "index": 28,
          "w": 1600,
          "h": 1044
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-029.webp",
          "section": "大堂",
          "originalName": "31.jpg",
          "index": 29,
          "w": 1600,
          "h": 1030
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-030.webp",
          "section": "大堂",
          "originalName": "32.jpg",
          "index": 30,
          "w": 1600,
          "h": 1280
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-031.webp",
          "section": "大堂",
          "originalName": "33.jpg",
          "index": 31,
          "w": 1600,
          "h": 1165
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-032.webp",
          "section": "大堂",
          "originalName": "34.jpg",
          "index": 32,
          "w": 1600,
          "h": 1200
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-033.webp",
          "section": "门头",
          "originalName": "03.jpg",
          "index": 33,
          "w": 1600,
          "h": 963
        },
        {
          "src": "/static/case-assets/酒店-大连理工大学城市学院酒店/image-034.webp",
          "section": "门头",
          "originalName": "04.jpg",
          "index": 34,
          "w": 1600,
          "h": 1040
        }
      ]
    },
    {
      "slug": "酒店-温泉度假酒店-瓦房店",
      "name": "温泉度假酒店·瓦房店",
      "category": "酒店",
      "subtitle": "围绕水疗、休憩和服务动线展开",
      "intro": "从抵达、等候到休憩，建立酒店空间的秩序。",
      "imageCount": 8,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-001.webp",
        "w": 1600,
        "h": 800
      },
      "previewImages": [
        {
          "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-001.webp",
          "section": "",
          "originalName": "1.jpg",
          "index": 1,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-002.webp",
          "section": "",
          "originalName": "2.jpg",
          "index": 2,
          "w": 1600,
          "h": 661
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-001.webp",
          "section": "",
          "originalName": "1.jpg",
          "index": 1,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-002.webp",
          "section": "",
          "originalName": "2.jpg",
          "index": 2,
          "w": 1600,
          "h": 661
        },
        {
          "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-003.webp",
          "section": "",
          "originalName": "3.jpg",
          "index": 3,
          "w": 1600,
          "h": 800
        },
        {
          "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-004.webp",
          "section": "",
          "originalName": "4.jpg",
          "index": 4,
          "w": 1600,
          "h": 638
        },
        {
          "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-005.webp",
          "section": "",
          "originalName": "5.jpg",
          "index": 5,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-006.webp",
          "section": "",
          "originalName": "export_1780551654532 拷贝.jpg",
          "index": 6,
          "w": 1600,
          "h": 1399
        },
        {
          "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-007.webp",
          "section": "",
          "originalName": "export_1780551842529 拷贝.jpg",
          "index": 7,
          "w": 1600,
          "h": 1595
        },
        {
          "src": "/static/case-assets/酒店-温泉度假酒店-瓦房店/image-008.webp",
          "section": "",
          "originalName": "export_1780552418694 拷贝.jpg",
          "index": 8,
          "w": 1600,
          "h": 1571
        }
      ]
    },
    {
      "slug": "酒店-私宅",
      "name": "私宅",
      "category": "酒店",
      "subtitle": "从抵达到停留的酒店空间叙事",
      "intro": "从抵达、等候到休憩，建立酒店空间的秩序。",
      "imageCount": 21,
      "date": "2026-06-30",
      "cover": {
        "src": "/static/case-assets/酒店-私宅/image-001.webp",
        "w": 1600,
        "h": 1600
      },
      "previewImages": [
        {
          "src": "/static/case-assets/酒店-私宅/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 1600
        }
      ],
      "facadeAnalysis": null,
      "images": [
        {
          "src": "/static/case-assets/酒店-私宅/image-001.webp",
          "section": "",
          "originalName": "1 (1).jpg",
          "index": 1,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-002.webp",
          "section": "",
          "originalName": "1 (2).jpg",
          "index": 2,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-003.webp",
          "section": "",
          "originalName": "1 (3).jpg",
          "index": 3,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-004.webp",
          "section": "",
          "originalName": "1 (4).jpg",
          "index": 4,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-005.webp",
          "section": "",
          "originalName": "1 (5).jpg",
          "index": 5,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-006.webp",
          "section": "",
          "originalName": "1 (6).jpg",
          "index": 6,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-007.webp",
          "section": "",
          "originalName": "1 (7).jpg",
          "index": 7,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-008.webp",
          "section": "",
          "originalName": "1 (8).jpg",
          "index": 8,
          "w": 1600,
          "h": 1600
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-009.webp",
          "section": "",
          "originalName": "2 (1).jpg",
          "index": 9,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-010.webp",
          "section": "",
          "originalName": "2 (2).jpg",
          "index": 10,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-011.webp",
          "section": "",
          "originalName": "2 (3).jpg",
          "index": 11,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-012.webp",
          "section": "",
          "originalName": "3 (1).jpg",
          "index": 12,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-013.webp",
          "section": "",
          "originalName": "3 (2).jpg",
          "index": 13,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-014.webp",
          "section": "",
          "originalName": "3 (3).jpg",
          "index": 14,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-015.webp",
          "section": "",
          "originalName": "3 (4).jpg",
          "index": 15,
          "w": 1600,
          "h": 1126
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-016.webp",
          "section": "",
          "originalName": "3 (5).jpg",
          "index": 16,
          "w": 1600,
          "h": 1128
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-017.webp",
          "section": "",
          "originalName": "3 (6).jpg",
          "index": 17,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-018.webp",
          "section": "",
          "originalName": "3 (7).jpg",
          "index": 18,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-019.webp",
          "section": "",
          "originalName": "3 (8).jpg",
          "index": 19,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-020.webp",
          "section": "",
          "originalName": "3 (9).jpg",
          "index": 20,
          "w": 1600,
          "h": 1231
        },
        {
          "src": "/static/case-assets/酒店-私宅/image-021.webp",
          "section": "",
          "originalName": "3 (10).jpg",
          "index": 21,
          "w": 1600,
          "h": 1231
        }
      ]
    }
  ],
  "categories": [
    "商业",
    "洗浴",
    "酒店"
  ],
  "totalImages": 914
};

normalizeImageRecord(rawSiteData.brand.logo)
normalizeImageRecord(rawSiteData.brand.portrait)
rawSiteData.projects.forEach(normalizeProject)

export const siteData = rawSiteData
