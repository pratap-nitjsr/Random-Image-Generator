from huggingface_hub import HfApi

repo_name = "Pratap-K/cgan-generator"
api = HfApi()
api.create_repo(repo_name, exist_ok=True)
api.upload_file(
    path_or_fileobj="./GeneratorModels/CGAN_Generator.h5",
    path_in_repo="CGAN_Generator.h5",
    repo_id=repo_name
)
