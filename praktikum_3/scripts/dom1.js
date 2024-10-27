function addTask() {
    document.getElementById(input)
           
}

function deleteTask(element) {
   
}

function editTask(element) {
   
}

// Fungsi untuk menambahkan tugas ke daftar
function addTask() {
    const taskInput = document.getElementById("taskInput"); // Mengambil elemen input
    const taskText = taskInput.value.trim(); // Mengambil teks dan menghapus spasi di awal/akhir
    if (taskText === "") return; // Jika input kosong, hentikan fungsi

    // Membuat elemen list baru
    const li = document.createElement("li");
    li.innerText = taskText;

    // Mengatur event untuk edit dan tandai sebagai selesai
    li.addEventListener("dblclick", function() {
        editTask(li);
    });
    li.addEventListener("click", function() {
        toggleCompleteTask(li);
    });

    // Membuat tombol hapus untuk setiap tugas
    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerText = " X";
    deleteBtn.onclick = function() {
        deleteTask(li);
    };
    li.appendChild(deleteBtn); // Menambahkan tombol hapus ke elemen tugas

    // Menambahkan elemen tugas ke daftar tugas
    document.getElementById("taskList").appendChild(li);

    // Mengosongkan kolom input
    taskInput.value = "";
}

// Fungsi untuk menghapus tugas
function deleteTask(taskElement) {
    taskElement.remove();
}

// Fungsi untuk mengedit tugas
function editTask(taskElement) {
    const originalText = taskElement.childNodes[0].nodeValue; // Teks asli tugas
    const input = document.createElement("input");
    input.type = "text";
    input.value = originalText;

    // Saat menekan Enter, simpan perubahan dan hilangkan input
    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            taskElement.childNodes[0].nodeValue = input.value;
            taskElement.removeChild(input);
        }
    });

    // Masukkan input ke dalam elemen tugas dan fokus ke input
    taskElement.insertBefore(input, taskElement.firstChild);
    input.focus();
}

// Fungsi untuk menandai tugas sebagai selesai
function toggleCompleteTask(taskElement) {
    taskElement.classList.toggle("completed");
}
