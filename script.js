fetch('./proyectos_info.json')
			.then(response => response.json())
			.then(data => {
				const proyectos = data.proyectos;
				const proyectosContainer = document.getElementById("proyectosContainer");

				proyectos.forEach(proyecto => {
					const article = document.createElement("article");
					const divIcono = document.createElement("div");
					const imgIcono = document.createElement("img");
					const h2 = document.createElement("h2");
					const p = document.createElement("p");
					const a = document.createElement("a");

					article.className = "article";
					imgIcono.src = proyecto.imagen;
					imgIcono.title = proyecto.nombre;
					imgIcono.alt = proyecto.nombre;
					h2.textContent = proyecto.nombre;
					p.textContent = proyecto.descripcion;

					if (proyecto.boton === "Modelos") {
						a.href = proyecto.url;
						a.textContent = proyecto.boton;
						a.download = proyecto.url.substring(proyecto.url.lastIndexOf('/') + 1);
                        a.classList.add("boton");
					} else {
						a.href = proyecto.url;
						a.textContent = proyecto.boton;
                        a.classList.add("boton");
					}

					divIcono.className = "icono";
					divIcono.appendChild(imgIcono);
					article.appendChild(divIcono);
					article.appendChild(h2);
					article.appendChild(p);
					article.appendChild(a);
					proyectosContainer.appendChild(article);
				});
			})
			.catch(error => {
				console.log('Error al cargar el archivo JSON:', error);
			});


