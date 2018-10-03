gcloud kms encrypt \
  --plaintext-file=env \
  --ciphertext-file=env.enc \
  --location=global \
  --keyring=default \
  --key=coderally-api